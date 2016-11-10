var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userService = require('../services/user-service');

var userSchema = new Schema({
    username: { type: String, unique: true, required: 'Username is required for any User'},
    firstName: {type: String, required: 'First Name is Required for User'},
    lastName: {type: String, required: 'Last Name is Required for User'},
    password: {type: String, required: 'Password is Required for User'},
    accountType: {type: String, required: 'Account is Required for User'},
    email: {type: String },
    contactNo: {type: Number }
});

userSchema.statics.findUserByName = function(name, cb){
    return this.find({name: new RegExp(name, 'i'), cb});
}

userSchema.path('email').validate(function(value, next){
    userService.findUserByEmail(value, function(err, user){
        if(err){
            console.log(err);
            return next(false);
        }
        next(!user);
    });
}, 'Email Address already in Use');

userSchema.path('username').validate(function(value, next){
    userService.findUser(value, function(err, user){
        if(err){
            console.log(err);
            return next(false);
        }
        next(!user);
    });
}, 'Username already in Use');

var User = mongoose.model('User', userSchema);

module.exports = User ;

