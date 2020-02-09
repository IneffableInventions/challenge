
const mongoose = require("mongosee");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const express = require('express');
const app = express();

const notesRoute = require("./routes/notes.route");

/* Middelwares */
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use('/notas', notesRoute);

app.listen(3000, () =>{
    console.log('Example app listening on port 3000!');
})