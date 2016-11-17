var express = require('express');
var router = express.Router();
var userService = require('../services/user-service');
var passport = require('passport');
var restrict = require('../auth/restrict');
var restrictUser = require('../auth/restrictUser');
var config = require('../config');


router.get('/', restrict, function(req, res, next) {
    var vm = {
    title: 'Home',
    loggedUser: req.user
  };
  console.log(req.user.accountType);
  if(req.user.accountType=="Teacher"){
    return res.render("home_t", vm);
  }else if(req.user.accountType=="Student"){
    return res.render("home_s", vm);
  }
  res.render('login', vm);
});


module.exports = router;