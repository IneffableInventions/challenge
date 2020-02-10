const Note = require("../models/note");

function getAllNotesRequest(req, res) {
    Note.find({}, (error, registros) => {
        if(error) console.error("No se pudo obtener los registros de notas");
        res.status(200).json(registros);
    });
}

function createNoteRequest(req, res) {
    const newNote = new Note(req.body);
    newNote.save((error, newNote) => {
        if(error) 
            return console.error("No se pudo crear una nota");
        else
            res.status(202).json({sucess: true, msg: 'Note saved'});
    });
}

module.exports = {
    getAllNotesRequest:  getAllNotesRequest,
    createNoteReques:    createNoteRequest,
};