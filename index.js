const express = require('express');
const body = require('connect-multiparty')();
const app = express();
const mongoose = require('mongoose');
const config = require('./configuraciones/config');
const rutas = require('./rutas/public');
const cors = require('cors');

var cloudinary = require('cloudinary');
cloudinary.config({ 
    cloud_name: 'viviana-taller-js', 
    api_key: '617162444936569', 
    api_secret: 'Bp0xr3BCmoCOy5b8QbGN5TtpKPs' 
});

app.use(cors());

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