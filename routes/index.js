var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var vm = {
    title: 'NodeJS Server',
    firstName : req.user ? req.user.firstName : null,
    loggedUser: req.user ? req.user : null
  }
  console.log(vm);
  res.render('index', vm);
});

module.exports = router;
