const express = require('express');
const ClientController = require("../controllers/ClientController");
const ProjectController = require("../controllers/ProjectController");
const InvoiceController = require("../controllers/InvoiceController");
const ServiceController = require("../controllers/ServiceController");

const projectController = new ProjectController();
const clientController = new ClientController();
const invoiceController = new InvoiceController();
const serviceController = new ServiceController();

const authRouter = express.Router();

authRouter.get('/clients', clientController.getClients);
authRouter.get('/clients/:id', clientController.getClientById);
authRouter.post('/clients', clientController.createClient);
authRouter.patch('/clients/:id', clientController.updateClientById);
authRouter.delete('/clients/:id', clientController.deleteClientById);

authRouter.get('/projects', projectController.getProjects);
authRouter.get('/projects/:id', projectController.getProjectById);
authRouter.post('/projects', projectController.createProject);
authRouter.patch('/projects/:id', projectController.updateProjectById);
authRouter.delete('/projects/:id', projectController.deleteProjectById);

authRouter.get('/invoices', invoiceController.getInvoices);
authRouter.get('/invoices/:id', invoiceController.getInvoiceById);
authRouter.post('/invoices', invoiceController.createInvoice);

authRouter.get('/services', serviceController.getServices);
authRouter.get('/services/:id', serviceController.getServiceById);
authRouter.post('/services', serviceController.createService);
authRouter.patch('/services/:id', serviceController.updateServiceById);
authRouter.delete('/services/:id', serviceController.deleteServiceById);


module.exports = authRouter;