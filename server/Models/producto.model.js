const mongoose = require('mongoose');
const ProductoSchema = new mongoose.Schema({
    titulo: { type: String },
    precio: { type: String },
    descripcion: { type: String }
}, { timestamps: true });
module.exports.Producto = mongoose.model('Producto', ProductoSchema);