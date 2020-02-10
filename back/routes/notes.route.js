const express = require("express");
const Router = express.Router();
const noteCtrl = require("../controllers/note.controller");

Router.get("/", noteCtrl.getAllNotesRequest);
Router.post("/", noteCtrl.createNoteRequest);
Router.delete("/:id", noteCtrl.deleteNoteByIdRequest);

module.exports = Router;