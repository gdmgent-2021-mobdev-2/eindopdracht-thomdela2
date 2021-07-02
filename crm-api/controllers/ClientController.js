const Client = require("../models/Client");

class ClientController {

    constructor() {
    }

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
            if (!client) {
                res.status(404)
            }
            res.status(200).json(client);
        } catch (e) {
            next(e);
        }
    }

    createClient = async (req, res, next) => {
        // return res.json(req.body);
        const client = new Client(req.body);

        try {
            const c = client.save();
            res.status(200).json(c);
        } catch (e) {
            next(e);
        }
    }

    updateClientById = async (req, res, next) => {
        try {
            const {id} = req.params;
            const client = await Client.findById(id).exec();
            if (client) {
                client.overwrite(req.body);
                const c = await client.save();
                res.status(200).json(c);
            }
        } catch (e) {
            next(e);
        }
    }

    deleteClientById = async (req, res, next) => {
        try {
            const {id} = req.params;
            const client = await Client.findById(id).exec();
            if (client) {
                await client.remove();
                res.status(200).json({});
            }
        } catch (e) {
            next(e);
        }
    }

}

module.exports = ClientController;