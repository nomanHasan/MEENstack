var express = require('express');
var router = express.Router();
var userService = require('../services/user-service');
var passport = require('passport');
var restrict = require('../auth/restrict');
var restrictUser = require('../auth/restrictUser');
var config = require('../config');


router.get('/home', restrict, function(req, res, next) {
  var vm = {
    title: 'Home',
    loggedUser: req.user
  };
  res.render('home_s', vm);
});

router.get('/findtuition', restrict, function(req, res, next) {
  var vm = {
    title: 'Find Tuition',
    jobs: [{title: "JO !", id:1}, {title: "JO1 !", id:2}, {title: "AJIM ", id:3}],
    loggedUser: req.user
  };
  res.render('findtuition', vm);
});


module.exports = router;