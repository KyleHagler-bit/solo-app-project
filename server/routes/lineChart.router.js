const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//GETs the data neded from the entry table in order to build the line chart
router.get('/', rejectUnauthenticated, (req, res) => {
  const queryText=`SELECT emotion_value, date_logged FROM "entry" WHERE user_id=$1 ORDER BY id ASC;`
  const queryValues=[req.user.id]
    pool.query(queryText,queryValues)
        .then(results => {
          // console.log(results.rows);
        res.send(results.rows)})
        .catch(error => {
            //console.log('Error making get on linechart', error);
            res.sendStatus(500);
        });
});

module.exports = router;