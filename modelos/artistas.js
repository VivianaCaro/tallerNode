const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var artista = new Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    imagen: String,
    biografia: String,
    contacto:{
        telefono: Number,
        celular: Number,
        correo: String
    }
});

module.exports = mongoose.model('Artista', artista);