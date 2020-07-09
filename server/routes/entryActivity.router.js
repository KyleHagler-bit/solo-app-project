const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  pool.query('SELECT * FROM entry_activity')
  
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error GET entry", error);
      res.sendStatus(500);
    });
});

// router.post("/", rejectUnauthenticated, (req, res) => {
//    const entry= req.body; // pull the object out out of the HTTP REQUEST
//    let {iconsArray} = entry;
//   //  iconsArray=parseInt(iconsArray); //try to change into intgers
//   if (req.body === undefined) {
//     // stop, dont touch the database
//     res.sendStatus(400); // 400 BAD REQUEST
//     return;
//   }

//   console.log('inside entryActivity router', iconsArray)

//   // for (let i=0; i<iconsArray.length; i++){
//   const queryText = `
//   INSERT INTO entry_activity ( entry_id, activity_id) 
//   (SELECT id,$1 FROM entry WHERE id = (SELECT MAX(id) FROM entry) AND user_id=$2);`;
//   pool
//     .query(queryText, [iconsArray, req.user.id])
//     .then(function (result) {
//       // result.rows: 'INSERT 0 1';
//       // it worked!
//       res.sendStatus(200); // 200: OK
//     })
//     .catch(function (error) {
//       console.log("Sorry, there was an error with your query: ", error);
//       res.sendStatus(500); // HTTP SERVER ERROR
//     });

//   //}

// });



// router.post("/", async (req, res) => {
//   const client = await pool.connect();

//   try {
//     const {
//       iconsArray
//     } = req.body;
//     await client.query("BEGIN");
//     const orderInsertResults = await client.query(
//       `INSERT INTO entry_activity ( entry_id, activity_id) 
//    (SELECT id,$1 FROM entry WHERE id = (SELECT MAX(id) FROM entry) AND user_id=$2);`,
//       [iconsArray, req.user.id]
//     );
//     const iconsId = orderInsertResults.rows[0].id;

//     await Promise.all(
//       pizzas.map((pizza) => {
//         const insertLineItemText = `INSERT INTO "line_item" ("order_id", "pizza_id", "quantity") VALUES ($1, $2, $3)`;
//         const insertLineItemValues = [orderId, pizza.id, pizza.quantity];
//         return client.query(insertLineItemText, insertLineItemValues);
//       })
//     );

//     await client.query("COMMIT");
//     res.sendStatus(201);
//   } catch (error) {
//     await client.query("ROLLBACK");
//     console.log("Error POST /api/order", error);
//     res.sendStatus(500);
//   } finally {
//     client.release();
//   }
// });




module.exports = router;