const mongoose = require('mongoose');

const States = {
    open: 'open',
    paid: 'paid',
    behind: 'behind'
}

//Create Schema
const invoiceSchema = new mongoose.Schema({

    number: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
        enum: [States.open, States.paid, States.behind],
        default: States.open
    },
    projectId: {
        type: 'ObjectId',
        required: true,
    },
    clientId: {
        type: 'ObjectId',
        required: true,
    },
    price: {
        type: Number,
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
const Invoice = mongoose.model('Invoice', invoiceSchema);

invoiceSchema.virtual('project', {
    ref: 'Project',
    localField: 'projectId',
    foreignField: '_id',
    justOne: true,
});

invoiceSchema.virtual('client', {
    ref: 'Client',
    localField: 'clientId',
    foreignField: '_id',
    justOne: true,
});

//Export
module.exports = {
    invoiceSchema,
    Invoice,
}