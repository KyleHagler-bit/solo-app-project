const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  pool.query('SELECT * FROM activity_library')
  
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error GET icons", error);
      res.sendStatus(500);
    });
});

module.exports = router;