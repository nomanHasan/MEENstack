var User = require('../models/user');

exports.addUser = function(user, next){
    var newUser = new User({
        username: user.username.toLowerCase(),
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
        email: user.email.toLowerCase(),
        contactNo: user.contactNo,
        accountType: user.accountType
    });

    newUser.save(function(err){
        if(err){
            console.log(err);
            return next(err);
        }
        next(null);
        console.log('User Saved on the Database');
    });
}

exports.findUserByEmail = function(email, next){
    User.findOne({email: email.toLowerCase()}, function(err, user){
        next(err, user);
    })
};

exports.findUser = function(username, next){
    User.findOne({username: username }, function(err, user){
        next(err, user);
    })
}