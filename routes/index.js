var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome' });
});

router.get('/daniel', function(req, res, next) {
  res.render('daniel', {
    title: 'Daniel Williams',
    message : 'Daniel is currently enrolled at Georgian College, where he is taking the Computer Programmer course'
  });
});

router.get('/patrick', function(req, res, next) {
  res.render('patrick', {
    title: 'Patrick',
    message : 'Patrick is retired.'
  });
});

router.get('/susan', function(req, res, next) {
  res.render('susan', {
    title: 'Susan',
    message : 'Susan is a nurse.'
  });
});

router.get('/jackie', function(req, res, next) {
  res.render('jackie', {
    title: 'Jackie',
    message : 'Jackie is a highschool student in the 10th grade.'
  });
});

module.exports = router;


