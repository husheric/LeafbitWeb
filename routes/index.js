var express = require('express');
var router = express.Router();
let db = require('../db/queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getUserTree/:user_id', db.getUserTree);

router.get('/getTreeMarkers', db.getTreeMarkers);

router.post('/insertTreeMarker', db.insertTreeMarker);

module.exports = router;
