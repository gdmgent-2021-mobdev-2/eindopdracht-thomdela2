const mongoose = require('mongoose');

const States = {
    open: 'open',
    pending: 'pending',
    progress: 'in progress',
    closed: 'closed',
}

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
    serviceId: {
        type: 'ObjectId',
        required: true,
    },
    state: {
        type: String,
        required: true,
        enum: [States.open, States.pending, States.progress, States.closed, States.paid],
        default: States.open,
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
const Project = mongoose.model('Project', projectSchema);

projectSchema.virtual('client', {
    ref: 'Client',
    localField: 'clientId',
    foreignField: '_id',
    justOne: true,
});

projectSchema.virtual('service', {
    ref: 'Service',
    localField: 'serviceId',
    foreignField: '_id',
    justOne: true,
});

//Export
module.exports = {
    projectSchema,
    Project,
}