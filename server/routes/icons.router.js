const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//GETs all icons from the library of icons in the database
//This means grabbing:
//      id    activity_name     activity_icon (this would be the bootstrap className)
router.get('/', (req, res) => {
  pool.query('SELECT * FROM activity_library')

    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error GET icons in router", error);
      res.sendStatus(500);
    });
});

module.exports = router;