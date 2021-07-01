const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.NODE_PORT;

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

app.get('/', (req, res) => {
    res.status(200);
    res.json({});
});

// 404
app.use((req, res) => {
    res.status(404);
    res.json({
        error: "Route not Found!",
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});