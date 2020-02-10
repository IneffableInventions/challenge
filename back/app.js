
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const express = require('express');
const app = express();

const notesRoute = require("./routes/notes.route");


/* Database conection*/
const URL_DATABASE = 'mongodb://localhost:27017/challange';
mongoose.connect(URL_DATABASE, (err) => {
    console.error.bind(console, 'MongoDB connection error:');
});

/* Middelwares */
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use('/notas', notesRoute);


app.listen(3000, () =>{
    console.log('Example app listening on port 3000!');
})