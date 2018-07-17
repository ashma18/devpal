//Create strategy
const JwtStrategy = require('passport-jwt').Strategy;
const Extractjwt = require('passport-jwt').ExtractJwt;
//find users details
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('../config/keys');

const opts = {};
opts.jwtFromRequest = Extractjwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    // JWT Payload has user ID in it, so we can find it using mongoose methods on User
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        console.log(jwt_payload);
            User.findById(jwt_payload.id)
                .then(user => {
                    if(user){
                        return done(null, user); 
                    }
                    return done(null, false);
                })
                .catch(err => console.log(err));
    }))    
} 