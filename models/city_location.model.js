const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const CityLocationSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    },

}, {
    timestamps: true
});

module.exports = mongoose.model('City_Location', CityLocationSchema);
