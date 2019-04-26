var express = require('express');
var router = express.Router();
var mongodb = require('../config/mongo.db');
var mongoose = require('mongoose');
var Journey = require('../models/journey.model');
var User = require('../models/user.model');
var Location = require( '../models/city_location.model');



//
// Geef een lijst van alle reizen.
//
router.get('/journeys', function(req, res) {
    res.contentType('application/json');
    Journey.find({})
        .populate('cities')
        .then((journeys) => {
        res.status(200).json(journeys);
})
.catch((error) => res.status(401).json(error));
});

//Geef een specifiek reis aan de hand van ID

router.get('/journeys/:id', function (req, res) {
    res.contentType('application/json');
    Journey.findById(req.params.id)
    .populate('locations')
    .then((Journey) => {
        // console.log(journey);
        res.status(200).json(Journey);
    })
    .catch((error) => res.status(401).json(error));
});

// Voeg een nieuwe reis toe

router.post('/journeys', function(req, res, next) {
    res.contentType('application/json');
    Journey.create({_id: mongoose.Types.ObjectId(),
                   name: req.body.name,
                   departure_date: req.body.departure_date,
                   return_date: req.body.return_date,
                   description: req.body.description,
                   city: req.body.city})
                .then(journey => res.send(journey))
                .catch(next);
});

router.post('/journeys/location/:journeyId', function(req, res) {

    var location = {"name": req.body.name,
        "address": req.body.address,
        "category": req.body.category,
        "description": req.body.description,
        "imagePath": req.body.imagePath};

        Location.findOne({name: location.name} && {address: location.address}, function(err,doc){
            if(doc == null){
                console.log('not found');

                Location.create({
                    _id: mongoose.Types.ObjectId(),
                    name: location.name,
                    address: location.address,
                    category: location.category,
                    description: location.description,
                    imagePath: location.imagePath
                })
                .then(newLocation => {
            
                var journeyId = {'_id':req.params.journeyId};
            
                Journey.findOneAndUpdate({_id: journeyId}, {$push:{locations: newLocation._id}}, {new: true}, function(err, doc){
                    if(err){
                        console.log("Something wrong when updating data!");
                    }
                    res.status(201).json(doc);
                    console.log(`created${doc}`);
                })
               });

            } else{
                console.log(`found!${doc}`);

                var journeyId = {'_id':req.params.journeyId};
            
                Journey.findOneAndUpdate({_id: journeyId}, {$push:{locations: doc._id}}, {new: true}, function(err, doc){
                    if(err){
                        console.log("Something wrong when updating data!");
                    }
                    res.status(201).json(doc);
                    console.log(`updated${doc}`);
                })
            }
        })
  });

  router.put('/journeys/user/:id', function(req, res, next){
    const userId = req.params.id;
    const journey = req.body._id; 
    User.findByIdAndUpdate({ _id: userId },
      { $push: { journey: journey } })
      .then((user) => res.status(200).send(user))
      .catch(next);

  });

  router.put('/journeys/update/:id', function (req, res) {
  console.log(req.body);
  var id = req.params.id;

  var update = {
   "description": req.body.description
  }

  Journey.findById(id)
  .then(journey => {
    journey.set(update);
    journey.save()
    .then(() => {
      res.status(200).send(journey);
    })
    .catch(error => res.status(401).json(error))

  })
  .catch (error => res.status(401).json(error));

});

router.delete('/journeys/:journeyId',  function(req, res) {
    var journeyId = req.params.journeyId;
    

    Journey.findById(journeyId)
        .then( journey => {
            journey.delete()
            res.status(200).json({msg: 'journey deleted'});
        })
        .catch(error => res.status(401).json(error));
});


module.exports = router;
