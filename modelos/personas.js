const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var persona = new Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    direccion: {
        calle: String,
        numero: Number
    },
    contacto:{
        telefono: Number,
        celular: Number,
        correo: String
    }
});

module.exports = mongoose.model('Persona', persona);