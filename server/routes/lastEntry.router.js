const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


async function getIconsById(entry_id) {
  // grab all entry_activities for a given entry_id
  const result = await pool.query('SELECT * FROM entry_activity WHERE entry_id=$1;',[entry_id]);
  return result.rows;
}

//This GETs only one entry from the entry table
//And since ordered by id and DESC, will grab the latest entry made
router.get('/', rejectUnauthenticated, (req, res) => {
  pool.query('SELECT * FROM entry WHERE user_id=$1 ORDER BY id DESC LIMIT 1',[req.user.id]) 
  
  .then(async (result) => {
    const rows = result.rows;
    // add chosen_icons key to each entry (so the client doesnt have to)
    await Promise.all(
      rows.map( async (entry) => {
        entry.chosen_icons = await getIconsById(entry.id);
      })
    )
    res.send(rows);
  })
  .catch((error) => {
    //console.log("Error GET entry", error);
    res.sendStatus(500);
  });
});



module.exports = router;