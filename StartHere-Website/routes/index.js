var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: path.join(__dirname, '../public/html') });
});

/* GET Add page. */
router.get('/add', function(req, res, next) {
  res.sendFile('add.html', { root: path.join(__dirname, '../public/html') });
});

/* GET search page. */
router.get('/search', function(req, res, next) {
  res.sendFile('search.html', { root: path.join(__dirname, '../public/html') });
});

module.exports = router;
