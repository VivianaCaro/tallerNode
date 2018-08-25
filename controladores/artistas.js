const Artista = require('../modelos/artistas');
var cloudinary = require('cloudinary');

exports.guardar = (req, res) => {
    cloudinary.v2.uploader.upload(req.files.imagen.path,
    function(errorUpload, result){
       if(errorUpload) {
        console.log(errorUpload);
       } else {
            var fechaNacimiento = new Date(req.body.anio+"-"+req.body.mes+"-"+req.body.dia);
            var artista = new Artista({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                nacimiento: fechaNacimiento,
                imagen: result.url,
                biografia: req.body.biografia,
                contacto:{
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

exports.encontrarPorCorreo = (req, res) => {
    Artista.findOne({'contacto.correo': req.body.correo}, (error, response) => {
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