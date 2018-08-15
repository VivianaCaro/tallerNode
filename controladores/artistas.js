const Artista = require('../modelos/artistas');

exports.guardar = (req, res) => {
    var artista = new Artista({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        contacto:{
            telefono: req.body.telefono,
            celular: req.body.celular,
            correo: req.body.correo
        }
    });

    // metodo save heredado de Schema
    artista.save((error, response) => {
        if(error) {
            res.status(500).json({mensaje: error})
        } else {
            res.status(200).json(response);
        }
    });
}

exports.listar = (req, res) => {
    Artista.find((error, response) => {
        if(error) {
            res.status(500).json({mensaje: error})
        } else {
            res.status(200).json(response);
        }
    })
}

exports.listarPorId = (req, res) => {
    var id = req.params.id;
    Artista.findById({_id:id}, (error, response) => {
        if(error) {
            res.status(500).json({mensaje: error})
        } else {
            res.status(200).json(response);
        }
    });
}

exports.encontrarPorNombre = (req, res) => {
    Artista.findOne({nombre: req.params.nombre}, (error, response) => {
        if(error) {
            res.status(500).json({mensaje: error})
        } else {
            res.status(200).json(response);
        }
    });
}

exports.eliminarPorId = (req, res) => {
    Artista.remove({_id: req.params.id}, (error, response) => {
        if(error) {
            res.status(500).json({mensaje: error})
        } else {
            res.status(200).json(response);
        }
    });
}