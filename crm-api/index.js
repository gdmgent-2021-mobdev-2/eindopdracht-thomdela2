const express = require('express');
require('dotenv').config();
const MongoClient = require('./db/MongoClient');
const { registerRoutes } = require('./routes');
const { registerMiddleware } = require('./middleware');

const db = new MongoClient();
db.connect();

const app = express();
const port = process.env.NODE_PORT;

registerMiddleware(app);

//API Routes
registerRoutes(app);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

const closeServer = () => {
    db.disconnect();
    process.exit();
};

process.on('SIGINT', () => closeServer());
process.on('SIGTERM', () => closeServer());