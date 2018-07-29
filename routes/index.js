var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// Slow request returning JSON after a while

router.get('/paul', function (req, res, next) {

  const start = new Date();

  setTimeout(() => {
    res.send({
      message:    'paul was here',
      start_date: start,
      end_date:   new Date()
    });
  }, 5000);

});

module.exports = router;
