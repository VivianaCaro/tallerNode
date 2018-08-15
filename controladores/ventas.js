const Venta = require('../modelos/ventas');

exports.registrarVenta = (req, res) => {
    var venta = new Venta({
        fecha: Date.now,
        obras_id: req.body.obras.ids,
        comprador_id: req.body.comprador._id,
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

exports.encontrarPorFecha = (req, res) => {
    Artista.findOne({fecha: req.params.fecha}, (error, response) => {
        if(error) {
            res.status(500).json({mensaje: error})
        } else {
            res.status(200).json(response);
        }
    });
}

exports.encontrarPorArtista = (req, res) => {
    Artista.findOne({fecha: req.params.fecha}, (error, response) => {
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