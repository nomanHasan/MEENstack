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
  };
  res.render('home_s', vm);
});


module.exports = router;