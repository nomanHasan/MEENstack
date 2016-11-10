var express = require('express');
var router = express.Router();
var userService = require('../services/user-service');
var passport = require('passport');
var restrict = require('../auth/restrict');
var restrictUser = require('../auth/restrictUser');
var config = require('../config');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', restrictUser, function(req, res, next) {
  var vm = {
    title: 'Login to your Account',
    error: req.flash('error')
  };
  res.render('login', vm);
});

router.get('/create',restrictUser, function(req, res, next) {
  var input = {
    username: null,
    password: null,
    firstName: null,
    lastName: null,
    email: null,
    contactNo: null
  };
  res.render('create', {input, title: 'Sign Up for a Account'});
});

router.post('/create',restrictUser, function(req, res, next) {
  var user = {
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    email: req.body.email,
    contactNo: req.body.contactNo,
    accountType: req.body.accountType
  }
  userService.addUser(user, function(err){
    if(err){
      var vm = {
        title: "Sign Up for a Account",
        input: req.body,
        error: err
      }
      console.log('User Service error occured')
      delete vm.input.password;
      return res.render('create', vm);
    }
    res.redirect('/');
  });  
});

router.post('/login', restrictUser,
function(req, res, next){
  if(req.body.rememberMe){
    req.session.cookie.maxAge = config.cookieMaxAge ;
  }
  next();
}, passport.authenticate('local',{
  successRedirect: '/',
  failureRedirect: '/users/login',
  failureFlash: 'Invalid Credential'
}));

router.get('/logout', function(req, res, next){
  req.logout();
  res.redirect('/');
})

router.get('/home', function(req, res, next){
  res.redirect('/');
});


module.exports = router;
