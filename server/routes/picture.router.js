const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//GETs the picture saved in the database (from user table) tied to the user
router.get('/', rejectUnauthenticated, (req, res) => {
  pool.query('SELECT "profile_pic" FROM "user" WHERE id=$1', [req.user.id]) //only gets entries from specific user

    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      //console.log("Error GET entry", error);
      res.sendStatus(500);
    });
});

//PUT used to update picture in database
router.put('/', (req, res) => {
  const queryText = `UPDATE "user" SET profile_pic = $1 WHERE id=$2;`
  const queryValues = [req.body.picture, req.user.id];

  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      //console.log('Error completing UPDATE', err);
      res.sendStatus(500);
    });
});


module.exports = router;