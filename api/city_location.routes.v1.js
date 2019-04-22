var express = require('express');
var router = express.Router();
var mongodb = require('../config/mongo.db');
var mongoose = require('mongoose');
var City_Location = require('../models/city_location.model');
var Journey = require('../models/journey.model');

router.get('/city-locations', function(req, res) {
    res.contentType('application/json');
    City_Location.find({})
        .then((city_location) => {
        res.status(200).json(city_location);
})
.catch((error) => res.status(401).json(error));
});

router.post('/city-locations', function(req, res) {
    res.contentType('application/json');
    City_Location.create({_id: mongoose.Types.ObjectId(),
                   name: req.body.name,
                   address: req.body.address,
                   category: req.body.category,
                   description: req.body.description,
                   imagePath: req.body.imagePath},
        function (err, result) {
            if (err){ res.json({success: false, msg:'Failed to add location'});
        } else {
            res.json({success: true, msg:'Location added'});}
        })
});

router.delete('/city-locations/:id' + '&' + ':journeyId',  function(req, res) {
    var id = req.params.id;
    var journeyId = req.params.journeyId;
    

    Journey.findById(journeyId)
        .then( journey => {
            journey.locations.pop(id)
            journey.save()
            console.log(journey)
            res.status(200).send(journey)
        })
        .catch(error => res.status(401).json(error));
});

module.exports = router;
