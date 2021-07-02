const express = require('express');
const MongoClient = require('./db/MongoClient');
const { registerRoutes } = require('./routes');
require('dotenv').config();

const db = new MongoClient();
//db.connect();

const app = express();
const port = process.env.NODE_PORT;

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

//API Routes
registerRoutes(app);

//Default
app.get('/', (req, res) => {
    res.status(200);
    res.json({});
});

//404
app.use((req, res) => {
    res.status(404);
    res.json({
        error: "Route not Found!",
    });
});
//Error Handler
app.use(function(err, req, res, next) {
    res.status(500).json(err);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

const closeServer = () => {
    db.disconnect();
    process.exit();
};

process.on('SIGINT', () => closeServer());
process.on('SIGTERM', () => closeServer());