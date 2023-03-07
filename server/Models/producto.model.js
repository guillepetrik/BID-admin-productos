const mongoose = require('mongoose');
const ProductoSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    precio: { type: Number, required: true },
    descripcion: { type: String }
}, { timestamps: true });
module.exports.Producto = mongoose.model('Producto', ProductoSchema);