const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

async function getIconsById(entry_id) {
  // grab all entry_activities for a given entry_id
  const result = await pool.query('SELECT * FROM entry_activity WHERE entry_id=$1;',[entry_id]);
  return result.rows;
}

//GET all entries tied to user to display for past entries
router.get('/', rejectUnauthenticated, (req, res) => {
  pool.query('SELECT * FROM entry WHERE user_id=$1 ORDER BY id DESC',[req.user.id]) //only gets entries from specific user
    .then(async (result) => {
      const rows = result.rows;
      // add chosen_icons key to each entry (so the client doesnt have to)
      await Promise.all(
        rows.map( async (entry) => {
          entry.chosen_icons = await getIconsById(entry.id);
        })
      )
      res.send(rows);
    })
    .catch((error) => {
      console.log("Error GET entry", error);
      res.sendStatus(500);
    });
});

 //POST a new entry
router.post("/", async (req, res) => {
  const client = await pool.connect();
  let today = new Date();

  // console.log(req.body);

  try {
    const {
      emotionValue,
      iconsArray,
      note,
      userID,
    } = req.body;
    await client.query("BEGIN");
    const orderInsertResults = await client.query(
      `INSERT INTO entry (user_id, emotion_value, note, date_logged) 
         VALUES ($1, $2, $3, $4);`,
      [userID, emotionValue, note, today]
    );
    //const orderId = orderInsertResults.rows[0].id;

    //this will make sure to add all the new icons related to that specific entry
    //MAX(id) is used to target the newest/latest entry as it will always have the largest id #
    await Promise.all(
      iconsArray.map((item) => {
        const insertLineItemText = `
           INSERT INTO entry_activity ( entry_id, activity_id) 
           (SELECT id,$1 FROM entry WHERE id = (SELECT MAX(id) FROM entry) AND user_id=$2)`;
        const insertLineItemValues = [item, userID];
        return client.query(insertLineItemText, insertLineItemValues);
      })
    );

    await client.query("COMMIT");
    res.sendStatus(201);
  } catch (error) {
    await client.query("ROLLBACK");
    console.log("Error POST /api/order", error);
    res.sendStatus(500);
  } finally {
    client.release();
  }
});

//DELETEs the chosen entry with the entry id given
router.delete("/:id", rejectUnauthenticated, (req, res) => {
  let id = req.params.id; // id of the thing to delete
	

  /* if (session.id !== database.id) {sendStatus(403) return;}*/
  let queryText = `SELECT * FROM entry WHERE id=$1`; //grabs specific item to grab the item user_id
  const queryValue = [id];
  pool
    .query(queryText, queryValue)
    .then((result) => {
			// console.log("result.rows[0].user_id", result.rows[0].user_id);
      if (result.rows[0].user_id === req.user.id) {
        queryText = `DELETE FROM entry WHERE id=$1;`; //deletes from database
        pool
          .query(queryText, [id])
          .then(function (result) {
            res.sendStatus(201); //status 201
          })
          .catch(function (error) {
            console.log("Sorry, there was an error with your query: ", error);
            res.sendStatus(500); //HTTP SERVER ERROR
          });
      } else {
        res.sendStatus(401);
      }
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

module.exports = router;