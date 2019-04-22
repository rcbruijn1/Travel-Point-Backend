var express = require('express');
var router = express.Router();
var mongodb = require('../config/mongo.db');
var mongoose = require('mongoose');
var City = require('../models/city.model');



//!!!


// THIS ROUTE IS DEPRECATED 





//!!!




//
// Geef een lijst van alle Steden.
//
router.get('/cities', function(req, res) {
    res.contentType('application/json');
    City.find({})
        .populate('locations')
        .then((cities) => {
        res.status(200).json(cities);
})
.catch((error) => res.status(401).json(error));
});

//Geef een specifieke Stad aan de hand van ID

router.get('/cities/:id', function (req, res) {
    res.contentType('application/json');
    City.findById(req.params.id)
    .populate('locations')
    .then((city) => {
        // console.log(cities);
        res.status(200).json(city);
    })
    .catch((error) => res.status(401).json(error));
});

// Voeg een nieuwe Stad toe

router.post('/cities', function(req, res, next) {
    res.contentType('application/json');
    City.create({_id: mongoose.Types.ObjectId(),
                   name: req.body.name,
                   country: req.body.country,
                   locations: req.body.locationId})
                .then(city => res.send(city))
                .catch(next);
        });

        // {success: true, msg:'Data registered'}

        router.post('/cities/:_id', function(req, res) {
            var id = {'_id':req.params._id};
            var locationId = { _id: req.body._id };
            City.findOneAndUpdate({_id: id}, {$push:{locations: locationId}}, {new: true}, function(err, doc){
                if(err){
                    console.log("Something wrong when updating data!");
                }
                res.json(201, doc);
                console.log(doc);
            });
          });


router.delete('/cities/:id',  function(req, res) {
    var id = req.params.id;

    City.findById(id)
        .then(city => {
            city.remove();
            res.status(200).send("City deleted");
        })
        .catch(error => res.status(401).json(error));
});



module.exports = router;
