const Note = require("../models/note");

function getAllNotesRequest(req, res) {
    Note.find({}, (error, registros) => {
        if(error) return res.status(500).send(error);
        res.status(200).json(registros);
    });
}

function createNoteRequest(req, res) {
    const newNote = new Note(req.body);
    newNote.save((error, newNote) => {
        if(error) {
            return res.status(500).send(error);
        }
        else
            res.status(202).json({sucess: true, msg: 'Note saved'});
    });
}

function deleteNoteByIdRequest(req, res) {
    Note.findByIdAndRemove(req.params.id, (err, todo) => {
        if(err) return res.status(500).send(err);
        else {
            res.status(200).json({
                sucess: true, msg: "Note deleted"
            });
        }
    });
}

module.exports = {
    getAllNotesRequest:  getAllNotesRequest,
    createNoteRequest:    createNoteRequest,
    deleteNoteByIdRequest: deleteNoteByIdRequest,
};