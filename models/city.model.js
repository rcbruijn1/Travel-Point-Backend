const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//DEPRECATED

const CitySchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    country: String,
    locations: [{type: mongoose.Schema.Types.ObjectId, ref: 'City_Location'}]
}, {
    timestamps: true
});

module.exports = mongoose.model('City', CitySchema);


