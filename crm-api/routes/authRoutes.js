const express = require('express');
const ClientController = require("../controllers/ClientController");
const ProjectController = require("../controllers/ProjectController");
const InvoiceController = require("../controllers/InvoiceController");
const ServiceController = require("../controllers/ServiceController");
const { withRole } = require("../services/auth/auth.services");
const { Roles } = require("../models/User");

const projectController = new ProjectController();
const clientController = new ClientController();
const invoiceController = new InvoiceController();
const serviceController = new ServiceController();

const authRouter = express.Router();
const adminRouter = express.Router();

authRouter.get('/clients', clientController.getClients);
authRouter.get('/clients/:id', clientController.getClientById);
adminRouter.post('/clients', clientController.createClient);
adminRouter.patch('/clients/:id', clientController.updateClientById);
adminRouter.delete('/clients/:id', clientController.deleteClientById);

authRouter.get('/projects', projectController.getProjects);
authRouter.get('/projects/:id', projectController.getProjectById);
adminRouter.post('/projects', projectController.createProject);
adminRouter.patch('/projects/:id', projectController.updateProjectById);
adminRouter.delete('/projects/:id', projectController.deleteProjectById);

authRouter.get('/invoices', invoiceController.getInvoices);
authRouter.get('/invoices/:id', invoiceController.getInvoiceById);
authRouter.post('/invoices', invoiceController.createInvoice);

authRouter.get('/services', serviceController.getServices);
authRouter.get('/services/:id', serviceController.getServiceById);
adminRouter.post('/services', serviceController.createService);
adminRouter.patch('/services/:id', serviceController.updateServiceById);
adminRouter.delete('/services/:id', serviceController.deleteServiceById);

authRouter.use(withRole(Roles.admin), adminRouter);

module.exports = authRouter;