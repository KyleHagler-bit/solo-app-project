const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//GET icons that are from the correct entry i.e. ones chosen by the user
router.get('/:id', rejectUnauthenticated, (req, res) => {

  pool.query('SELECT * FROM entry_activity WHERE entry_id=$1;',[req.params.id])
  
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      //console.log("Error GET icons in chosenIcons router", error);
      res.sendStatus(500);
    });
});

module.exports = router;