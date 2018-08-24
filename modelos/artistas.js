const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var artista = new Schema({
    nombre: String,
    apellido: String,
    nacimiento: Date,
    imagen: String,
    biografia: String,
    contacto:{
        celular: Number,
        correo: String
    }
});

module.exports = mongoose.model('Artista', artista);