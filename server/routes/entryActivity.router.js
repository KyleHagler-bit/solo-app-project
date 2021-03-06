const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//GETs all things found in "entry_activity" table in the database
// id     entry_id      activity_id
router.get('/', rejectUnauthenticated, (req, res) => {
  pool.query('SELECT * FROM entry_activity')

    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      //console.log("Error GET entry", error);
      res.sendStatus(500);
    });
});



module.exports = router;