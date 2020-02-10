
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const express = require('express');
const path = require("path");
const app = express();
const config = require("../front/src/config.json");
const notesRoute = require("./routes/notes.route");


console.log(config.state);
const port = config.state === "development" ?  config.back_port : config.port;

/* Database conection*/
const URL_DATABASE = config.mongourl;
mongoose.connect(URL_DATABASE, (err) => {
    console.error.bind(console, 'MongoDB connection error:');
});


/* Middelwares */
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use('/notas', notesRoute);

app.use(express.static(path.join(__dirname, "..", "front", "build")));
/* Servir los archivos estaticos de React */
app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "front", "build", "index.html"));
});

app.listen(port, () =>{
    console.log('Example app listening on port ' + port);
})