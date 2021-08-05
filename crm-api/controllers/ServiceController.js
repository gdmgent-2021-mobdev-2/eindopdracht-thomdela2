const NotFoundError = require("../errors/NotFoundError");
const ValidationError = require("../errors/ValidationError");
const { Service } = require("../models/Service");

class ServiceController {

    getServices = async (req, res, next) => {
        try {
            const services = await Service.find().exec();
            res.status(200).json(services);
        } catch (e) {
            next(e)
        }
    }

    getServiceById = async (req, res, next) => {
        try {
            const {id} = req.params;
            const service = await Service.findById(id).exec();
            if (service) {
                res.status(200).json(service);
            }
            next(new NotFoundError());
        } catch (e) {
            next(e.message)
        }
    }

    createService = async (req, res, next) => {
        try {
            const service = new Service(req.body);
            const s = service.save();
            res.status(200).json(service);
        } catch (e) {
            next(e.errors ? new ValidationError(e) : e);
        }
    }

    updateServiceById = async (req, res, next) => {
        try {
            const {id} = req.params;
            const service = await Service.findById(id).exec();
            if (service) {
                service.overwrite(req.body);
                const s = await service.save();
                res.status(200).json(service);
            } else {
                next(new NotFoundError());
            }
        } catch (e) {
            next(e.errors ? new ValidationError(e) : e);
        }
    }

    deleteServiceById = async (req, res, next) => {
        try {
            const {id} = req.params;
            const service = await Service.findById(id).exec();
            if (service) {
                await service.remove();
                res.status(200).json({});
            } else {
                next(new NotFoundError());
            }
        } catch (e) {
            next(e.message);
        }
    }
}

module.exports = ServiceController;