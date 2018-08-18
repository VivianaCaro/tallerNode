const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var venta = new Schema({
    fecha: { 
        type: Date,
        default: Date.now
    },
    obras_id: [{type: String}],
    comprador: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Comprador'
    },
    monto: Number
});

module.exports = mongoose.model('Venta', venta);