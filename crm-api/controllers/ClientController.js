const { Client } = require("../models/Client");
const NotFoundError = require("../errors/NotFoundError");
const ValidationError = require("../errors/ValidationError");

class ClientController {

    getClients = async (req, res, next) => {
        try {
            const clients = await Client.find().exec();
            res.status(200).json(clients);
        } catch (e) {
            next(e);
        }
    }

    getClientById = async (req, res, next) => {
        try {
            const {id} = req.params;
            const client = await Client.findById(id).exec();
            if (client) {
                res.status(200).json(client);
            }
            next(new NotFoundError());
        } catch (e) {
            next(e.message);
        }
    }

    createClient = async (req, res, next) => {
        try {
            const client = new Client(req.body);
            const c = client.save();
            res.status(200).json(client);
        } catch (e) {
            next(e.errors ? new ValidationError(e) : e);
        }
    }

    updateClientById = async (req, res, next) => {
        try {
            const {id} = req.params;
            const client = await Client.findById(id).exec();
            if (client) {
                client.overwrite(req.body);
                const c = await client.save();
                res.status(200).json(client);
            } else {
                next(new NotFoundError());
            }
        } catch (e) {
            next(e.errors ? new ValidationError(e) : e);
        }
    }

    deleteClientById = async (req, res, next) => {
        try {
            const {id} = req.params;
            const client = await Client.findById(id).exec();
            if (client) {
                await client.remove();
                res.status(200).json({});
            } else {
                next(new NotFoundError());
            }
        } catch (e) {
            next(e.message);
        }
    }

}

module.exports = ClientController;