const ClientController = require("../controllers/ClientController");
const ProjectController = require("../controllers/ProjectController");
const NotFoundError = require("../errors/NotFoundError");

const clientController = new ClientController();
const projectController = new ProjectController();

const registerRoutes = (app) => {

    app.get('/', (req, res) => {
        res.status(200);
        res.json({
            ping: "pong"
        });
    });

    app.get('/clients', clientController.getClients);
    app.get('/clients/:id', clientController.getClientById);
    app.post('/clients', clientController.createClient);
    app.patch('/clients/:id', clientController.updateClientById);
    app.delete('/clients/:id', clientController.deleteClientById);

    app.get('/projects', projectController.getProjects);
    app.get('/projects/:id', projectController.getProjectById);
    app.post('/projects', projectController.createProject);
    app.patch('/projects/:id', projectController.updateProjectById);
    app.delete('/projects/:id', projectController.deleteProjectById);

    //404
    app.use((req, res, next) => {
        next(new NotFoundError());
    });
    //Error Handler
    app.use(function(err, req, res, next) {
        res.status(err.statusCode || 500);
        res.json(err);
    });
};

module.exports = {
    registerRoutes,
}