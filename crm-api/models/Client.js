const mongoose = require('mongoose');

//Create Schema
const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
    },
});

//Create Model
const Client = mongoose.model('Client', clientSchema);

//Export
module.exports = {
    clientSchema,
    Client,
}