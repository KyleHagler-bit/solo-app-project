const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  pool.query('SELECT * FROM entry WHERE user_id=$1 ORDER BY id DESC',[req.user.id]) //only gets entries from specific user
  
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error GET entry", error);
      res.sendStatus(500);
    });
});

 //POST////////////////////
router.post("/", async (req, res) => {
  const client = await pool.connect();
  let today = new Date();

  console.log(req.body);

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

// router.post("/", rejectUnauthenticated, (req, res) => {
//   const entry = req.body; // pull the object out out of the HTTP REQUEST
//   const client = await pool.connect();
//   const { emotionValue, iconsArray, note, userID } = entry;
//   let today = new Date();
//   if (entry === undefined) {
//     // stop, dont touch the database
//     res.sendStatus(400); // 400 BAD REQUEST
//     return;
//   }

//   const queryText = `
//         INSERT INTO entry (user_id, emotion_value, note, date_logged) 
//         VALUES ($1, $2, $3, $4);`; //grabs database
//   pool
//     .query(queryText, [req.user.id, emotionValue, note, today])
//     .then(function (result) {
//       // result.rows: 'INSERT 0 1';
//       // it worked!
//       res.sendStatus(200); // 200: OK
//     })
//     .catch(function (error) {
//       console.log("Sorry, there was an error with your query: ", error);
//       res.sendStatus(500); // HTTP SERVER ERROR
//     });
// });




module.exports = router;