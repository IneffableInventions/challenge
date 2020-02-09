const express = require("express");
const Router = express.Router();

app.get("/lista", function(req, res) {
    res.send('Hello World');
});

module.exports = Router;