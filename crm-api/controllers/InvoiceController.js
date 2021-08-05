const { Invoice } = require('../models/Invoice');
const NotFoundError = require('../errors/NotFoundError');
const ValidationError = require('../errors/ValidationError');

class InvoiceController {

    getInvoices = async (req, res, next) => {
        try {
            const invoices = await Invoice.find().populate('client').populate('project').exec();
            res.status(200).json(invoices);
        } catch (e) {
            next(e)
        }
    }

    getInvoiceById = async (req, res, next) => {
        try {
            const {id} = req.params;
            const invoice = await Invoice.findById(id).populate('client').populate('project').exec();
            if (invoice) {
                res.status(200).json(invoice);
            }
            next(new NotFoundError());
        } catch (e) {
            next(e);
        }
    }

    createInvoice = async (req, res, next) => {
        try {
            const invoice = new Invoice(req.body);
            const i = invoice.save();
            res.status(200).json(invoice);
        } catch (e) {
            next(e.errors ? new ValidationError(e) : e);
        }
    }

    updateInvoiceById = async (req, res, next) => {
        try {
            const {id} = req.params;
            const invoice = await Invoice.findById(id).exec();
            if (invoice) {
                invoice.overwrite(req.body);
                const i = await invoice.save();
                res.status(200).json(invoice);
            } else {
                next(new NotFoundError());
            }
        } catch (e) {
            next(e.errors ? new ValidationError(e) : e);
        }
    }

    deleteInvoiceById = async (req, res, next) => {
        try {
            const {id} = req.params;
            const invoice = await Invoice.findById(id).exec();
            if (invoice) {
                await invoice.remove();
                res.status(200).json({});
            } else {
                next(new NotFoundError());
            }
        } catch (e) {
            next(e);
        }
    }

}

module.exports = InvoiceController;