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

router.put('/', (req, res) => {
  console.log('inside edit router', req.body)
  const updatedEntry = req.body;

  const queryText = `UPDATE entry
  SET 
  "emotion_value" = $1,
  "note" = $2
  WHERE id=$3`;

  const queryValues = [
    // req.user.id,
    updatedEntry.emotionValue,
    updatedEntry.note,
    updatedEntry.id
  ];

  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error completing UPDATE', err);
      res.sendStatus(500);
    });
});

module.exports = router;