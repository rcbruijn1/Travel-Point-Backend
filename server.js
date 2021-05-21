var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongodb = require('./config/mongo.db');
var path = require('path');
var cors = require('cors');
var passport = require('passport');
var app = express();

var city_routes_v1 = require('./api/city.routes.v1');
var city_location_routes_v1 = require('./api/city_location.routes.v1');
var users_routes_v1 = require('./api/users.routes.v1');
var journey_routes_v1 = require('./api/journey.routes.v1');

var config = require('./config/env');

module.exports = {};

app.use(bodyParser.urlencoded({
    'extended': 'true'
}));
app.use(bodyParser.json());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

//PASSPORT middleware
require('./config/passport')(passport);

app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

app.use('/api/v1', city_routes_v1);
app.use('/api/v1', city_location_routes_v1);
app.use('/api/v1/user', users_routes_v1);
app.use('/api/v1', journey_routes_v1);

app.set('port', (process.env.PORT || config.env.webPort));

app.use(function (err, req, res, next) {
    var error = {
        message: err.message,
        code: err.code,
        name: err.name,
        status: err.status
    }
    res.status(401).send(error);
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });

app.listen(config.env.webPort, function () {
    console.log('De server luistert op port ' + app.get('port'));
    console.log('Zie bijvoorbeeld http://localhost:3000/api/v1/cities');
});


module.exports = app;
