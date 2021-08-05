const express = require('express');
const ClientController = require("../controllers/ClientController");
const ProjectController = require("../controllers/ProjectController");

const projectController = new ProjectController();
const clientController = new ClientController();

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

module.exports = authRouter;