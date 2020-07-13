const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//This GETs only one entry from the entry table
//And since ordered by id and DESC, will grab the latest entry made
router.get('/', rejectUnauthenticated, (req, res) => {
  pool.query('SELECT * FROM entry WHERE user_id=$1 ORDER BY id DESC LIMIT 1',[req.user.id]) 
  
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error GET entry", error);
      res.sendStatus(500);
    });
});

module.exports = router;