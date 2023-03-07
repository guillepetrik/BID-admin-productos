const { Producto } = require('../Models/producto.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
module.exports.createProducto = (request, response) => {
    const { titulo, precio, descripcion } = request.body;
    Producto.create({
        titulo,
        precio,
        descripcion
    })
        .then(person => response.json(person))
        .catch(err => response.json(err));
}
module.exports.getAllProductos = (request, response) => {
    Producto.find({})
        .then(prod => response.json(prod))
        .catch(err => response.json(err))
}
module.exports.getProducto = (request, response) => {
    Producto.findOne({_id:request.params.id})
        .then(prod => response.json(prod))
        .catch(err => response.json(err))
}
module.exports.updateProducto = (request, response) => {
    Producto.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProducto => response.json(updatedProducto))
        .catch(err => response.json(err))
}
module.exports.deleteProducto = (request, response) => {
    Producto.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}