const Obra = require('../modelos/obras');
const Artista = require('../modelos/artistas');
var cloudinary = require('cloudinary');

exports.guardar = (req,res) => {
    cloudinary.v2.uploader.upload(req.files.imagen.path,
        function(errorUpload, result){
           if(errorUpload) {
            console.log(errorUpload);
           } else {
               console.log(result.url);
                Artista.findOne({correo: req.params.correo}, (error, responseArtista) => {
                    if(error) {
                        res.status(500).json({mensaje: error})
                    } else {
                        console.log("responseArtista: " + responseArtista);
                        var obra = new Obra({
                            titulo: req.body.titulo,
                            fecha: req.body.fecha,
                            autor: responseArtista._id,
                            tags: req.body.tags.split(','),
                            precio: req.body.precio,
                            imagen: result.url
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
                });
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
    Obra.find({autor: req.params.id}, (error, response) => {
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