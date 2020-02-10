const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    text:      { type: String, required: true },
    createdAt: { type: Date, required: true, default: new Date() }
});

module.exports = mongoose.model('Note', NoteSchema);