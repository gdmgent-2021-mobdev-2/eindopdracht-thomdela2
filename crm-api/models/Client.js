const mongoose = require('mongoose');
const { Project } = require('./Project');

//Create Schema
const clientSchema = new mongoose.Schema({
    name: {
        firstname: {
            type: String,
            required: true,
    
        },
        lastname: {
            type: String,
            required: true,
        },
    },
    email: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    location: {
        address: String,
        postalcode: Number,
        city: String,
        country: String,
    },
    date: {
        age: {
            type: Number,
        }
    }
}, {
    timestamps: true,
    toJson: {
        virtuals: true,
    },
    toObject: {
        virtuals:true,
    }
});

clientSchema.pre('remove', function() {
    const client = this;
    return Project.remove({ clientId: client._id });
});

clientSchema.virtual('fullname').get(function() {
    const client = this;
    return `${client.name.firstname} ${client.name.lastname}`;
});

//Create Model
const Client = mongoose.model('Client', clientSchema);

//Export
module.exports = {
    clientSchema,
    Client,
}