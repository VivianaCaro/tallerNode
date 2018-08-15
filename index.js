const express = require('express');
const body = require('connect-multiparty')();
const app = express();
const mongoose = require('mongoose');
const config = require('./configuraciones/config');
const rutas = require('./rutas/public');

app.use('/', body, rutas);
mongoose.connect(config.DB, error => {
    if(error) {
        console.log(error);
    } else {
        console.log("Conexion con DB establecida");
    }
});

app.listen(config.SERVER.port, error => {
    if(error) {
        console.log(error);
    } else {
        console.log("Servidor corriendo en el puerto ", config.SERVER.port);
    }
});