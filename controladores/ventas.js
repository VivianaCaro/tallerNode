const Venta = require('../modelos/ventas');

exports.registrarVenta = (req, res) => {
    var venta = new Venta({
        fecha: Date.now,
        obras_ids: req.body.obras.ids,
        comprador: req.body.comprador._id,
        monto: req.body.monto
    });

    // metodo save heredado de Schema
    venta.save((error, response) => {
        if(error) {
            res.status(500).json({mensaje: error})
        } else {
            res.status(200).json(response);
        }
    });
}

exports.listar = (req, res) => {
    Venta.find((error, response) => {
        if(error) {
            res.status(500).json({mensaje: error});
        } else {
            res.status(200).json(response);
        }
    }).sort(-fecha)
}

exports.encontrarPorArtistaId = (req, res) => {
    Artista.find({autor: req.params.id}, (error, response) => {
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