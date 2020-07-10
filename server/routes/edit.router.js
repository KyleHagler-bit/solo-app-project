const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/:id', rejectUnauthenticated, (req, res) => {
  pool.query('SELECT * FROM entry WHERE user_id=$1 AND id=$2', [req.user.id, req.params.id]) //only gets entries from specific user

    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error GET entry", error);
      res.sendStatus(500);
    });
});

// router.put('/', (req, res) => {
//   console.log('inside edit router', req.body)
//   const updatedEntry = req.body;

//   const queryText = `UPDATE entry
//   SET 
//   "emotion_value" = $1,
//   "note" = $2
//   WHERE id=$3`;

//   const queryValues = [
//     // req.user.id,
//     updatedEntry.emotionValue,
//     updatedEntry.note,
//     updatedEntry.id
//   ];

//   pool.query(queryText, queryValues)
//     .then(() => { res.sendStatus(200); })
//     .catch((err) => {
//       console.log('Error completing UPDATE', err);
//       res.sendStatus(500);
//     });
// });

router.put("/", async (req, res) => {
  const client = await pool.connect();
  let today = new Date();

  // console.log(req.body);

  try {
    const {
      emotionValue,
      iconsArray,
      note,
      id,
      activityEntry
    } = req.body;
    await client.query("BEGIN");
    const orderInsertResults = await client.query(
      `UPDATE entry SET "emotion_value" = $1, "note" = $2 WHERE id=$3`,
      [ emotionValue, note, id]
    );
    //const orderId = orderInsertResults.rows[0].id;
    
    await Promise.all(
      iconsArray.map((item) => {
        console.log('this is item in iconsArray',item)
        activityEntry.map((item2)=>{
          console.log('this is item2',item2)
        const insertLineItemText = `
           UPDATE entry_activity SET "activity_id" = $1, "entry_id"=$2 WHERE id=$3
          ;`
        
        const insertLineItemValues = [item, id, item2.id];
        return client.query(insertLineItemText, insertLineItemValues);
        })
      })
    );

    // `
    //        INSERT INTO entry_activity ( entry_id, activity_id) 
    //        (SELECT id,$1 FROM entry WHERE id = (SELECT MAX(id) FROM entry) AND user_id=$2)`;

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


module.exports = router;