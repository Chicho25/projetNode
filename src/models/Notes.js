const mongoose = require('mongoose'); // se requiere mongose para el squema de datos
const { Schema } = mongoose;

const NoteSchema = new Schema({
    title: {type: String, required: true}, 
    description: {type: String, required: true}, 
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Note', NoteSchema);