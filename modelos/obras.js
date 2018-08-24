const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var obra = new Schema({
    titulo: String,
    creacion: Number,
    autor: String,
    tags: [{type: String}],
    precio: Number,
    imagen: String
});

module.exports = mongoose.model('Obra', obra);