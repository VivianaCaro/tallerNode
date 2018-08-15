const Obra = require('../modelos/obras');

exports.guardar = (res,req) => {
    var obra = new Obra({
        titulo: req.body.titulo,
        fecha: req.body.fecha,
        autor: req.body.artista,
        tags: req.body.tags,
        precio: req.body.precio
    });

    // metodo save heredado de Schema
    obra.save((error, response) => {
        if(error) {
            res.status(500).json({mensaje: error})
        } else {
            res.status(200).json(response);
        }
    });
}

exports.listar = (req, res) => {
    Obra.find((error, response) => {
        if(error) {
            res.status(500).json({mensaje: error})
        } else {
            res.status(200).json(response);
        }
    })
}