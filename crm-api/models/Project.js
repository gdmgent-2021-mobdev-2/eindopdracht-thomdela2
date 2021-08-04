const mongoose = require('mongoose');

//Create Schema
const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    clientId: {
        type: 'ObjectId',
        required: true,
    },
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
const Project = mongoose.model('Project', projectSchema);

projectSchema.virtual('client', {
    ref: 'Client',
    localField: 'clientId',
    foreignField: '_id',
    justOne: true,
});

//Export
module.exports = {
    projectSchema,
    Project,
}