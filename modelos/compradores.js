const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var comprador = new Schema({
    nombre: String,
    apellido: String,
    direccion: {
        calle: String,
        numero: Number
    },
    contacto:{
        telefono: Number,
        celular: Number,
        correo: String
    },
    intereses: [{type: String}]
});

module.exports = mongoose.model('Comprador', comprador);