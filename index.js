const express = require('express');
const app = express();
const config = require('./configuraciones/config');
const rutas = require('./rutas/public');

app.use("/", rutas);

app.listen(config.SERVER.port, error => {
    if(error) {
        console.log(error);
    } else {
        console.log("Servidor corriendo en el puerto ", config.SERVER.port);
    }
});