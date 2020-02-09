const mongoose = require('mongoose');
const Schema = mongoose.schema;

const NoteSchema = new Schema({
    text:      { type: String, required: true },
    createdAt: { type: Date, required: true, default: new Date() }
});

module.exports = mongoose.model('Note', UserSchema);