const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const JourneySchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{
        type: String,
        required: true
    },
    departure_date: {
        type: Date,
        required: true
    },
    return_date: {
        type: Date,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    locations: [{type: mongoose.Schema.Types.ObjectId, ref: 'City_Location'}]
}, {
    timestamps: true
});

module.exports = mongoose.model('Journey', JourneySchema);