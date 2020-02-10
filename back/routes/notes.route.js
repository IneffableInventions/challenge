const express = require("express");
const Router = express.Router();
const noteCtrl = require("../controllers/note.controller");

Router.get("/", noteCtrl.getAllNotesRequest);
Router.post("/", noteCtrl.createNoteReques);

module.exports = Router;