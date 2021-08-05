const mongoose = require('mongoose');

//Create Schema
const serviceSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number, 
        required: false,
    },
    availability: {
        type: Boolean,
        required: true,
        default: true,
    }
}, {
    timestamps: true,
    toJson: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    }
});

//Create Model
const Service = mongoose.model('Service', serviceSchema);

//Export
module.exports = {
    serviceSchema,
    Service,
}