const UserController = require("../controllers/UserController");
const NotFoundError = require("../errors/NotFoundError");
const { authLocal, authJwt } = require("../services/auth/auth.services");
const authRouter = require("./authRoutes");

const userController = new UserController();

const registerRoutes = (app) => {

    app.get('/', (req, res) => {
        res.status(200);
        res.json({
            ping: "pong"
        });
    });

    app.post('/register', userController.register);
    app.post('/login', authLocal, userController.login);

    app.use(authJwt, authRouter);

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