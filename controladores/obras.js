const Obra = require('../modelos/obras');

exports.guardar = (res,req) => {
    var obra = new Obra({
        //titulo: req.body.titulo,
        fecha: req.body.fecha,
        autor: req.body.artista._id,
        tags: req.body.tags,
        precio: req.body.precio,
        imagen: req.body.imagen
    });
    for (var i = 0; i < tag.length; i++) {
        etc.tag.push(tag[i]);
    }
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

exports.listarPorId = (req, res) => {
    var id = req.params.id;
    Obra.findById({_id:id}, (error, response) => {
        if(error) {
            res.status(500).json({mensaje: error})
        } else {
            res.status(200).json(response);
        }
    });
}

exports.encontrarPorTag = (req, res) => {
    Obra.find({tags: {$all: req.params.tags}}, (error, response) => {
        if(error) {
            res.status(500).json({mensaje: error})
        } else {
            res.status(200).json(response);
        }
    });
}

exports.encontrarPorArtistaId = (req, res) => {
    Obra.find({autor: req.params.artista_id}, (error, response) => {
        if(error) {
            res.status(500).json({mensaje: error})
        } else {
            res.status(200).json(response);
        }
    });
}

exports.eliminarPorId = (req, res) => {
    Obra.remove({_id: req.params.id}, (error, response) => {
        if(error) {
            res.status(500).json({mensaje: error})
        } else {
            res.status(200).json(response);
        }
    });
}