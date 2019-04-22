var express = require('express');
var router = express.Router();
var mongodb = require('../config/mongo.db');
var User = require('../models/user.model');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var config = require('../config/env');
var City = require('../models/city.model');

//Register

router.post('/register', (req, res, next) =>{
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        admin: req.body.admin

    });

    User.addUser(newUser, (err, user)=> {
        if(err){
            res.json({success: false, msg:'Failed to register user'});

        }else { 
            res.json({success: true, msg:'User registered'});
        }
    });
});

//Authenticate

router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg:"User not found"});

        }

        User.comparePassword(password, user.password, (err, isMatch) =>{
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 604800

                });
                res.json({
                    success: true,
                    token: 'Bearer' + ' ' + token,
                    user: {
                        id: user._id,
                        username: user.username,
                        email: user.email,
                        admin: user.admin
                        
                    }
                });
            } else {
                return res.json({success: false, msg: "Wrong Password bruv"});
            }
        });
    });
});

//Profile

router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    User.findById(req.user._id)
    .populate('journey')
    .populate({
        path: 'journey',
        populate: {
            path: 'locations',
            model: 'City_Location'
}
    //         populate: { 
    //             path: 'locations',
    //             model: 'City_Location' 
    //         }
    //     }
    })                               
    .then(user => {
    res.status(200).json(user);
    console.log('success');
})
.catch((error) => res.status(401).json(error));
});

//Validate

router.get('/validate', (req, res, next) =>{
    res.send('VALIDATE');
});

module.exports = router;