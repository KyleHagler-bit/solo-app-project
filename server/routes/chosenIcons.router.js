const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/:id', rejectUnauthenticated, (req, res) => {
  //loses req.params.id at times?
console.log('this should be a number inside chosenIcons router', req.params.id)
  // console.log('inside chosenIcons router ',req.params.id)

  //    if (req.params.id=== undefined) {
  //    // stop, dont touch the database
  //    res.sendStatus(400); // 400 BAD REQUEST
  //    return;
  //  }
  pool.query('SELECT * FROM entry_activity WHERE entry_id=$1;',[req.params.id])
  
    .then((result) => {
      // console.log('result in router is',result)
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error GET icons in chosenIcons router", error);
      res.sendStatus(500);
    });
});

module.exports = router;