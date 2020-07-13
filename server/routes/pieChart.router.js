const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//used to GET the necessary data from the database to build the pie chart
//Here we use COUNT so we can fill the pie chart with a breakdown of the different activities
router.get('/', rejectUnauthenticated, (req, res) => {
  const queryText =
    `SELECT activity_name, COUNT(activity_id) AS count FROM "activity_library"
    JOIN "entry_activity" ON activity_library.id=entry_activity.activity_id
    JOIN "entry" ON entry_activity.entry_id = entry.id WHERE user_id=$1
    GROUP BY activity_name ;`
  
  const queryValues = [req.user.id]
  pool.query(queryText, queryValues)
    .then(results => {
      res.send(results.rows)
    })
    .catch(error => {
      console.log('Error making get on pie', error);
      res.sendStatus(500);
    });
});

module.exports = router;