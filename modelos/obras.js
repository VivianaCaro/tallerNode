const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var obra = new Schema({
    titulo: String,
    fecha: Date,
    autor: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Artista'
    },
    tags: [{type: String}],
    precio: Number,
    imagen: String
});

module.exports = mongoose.model('Obra', obra);