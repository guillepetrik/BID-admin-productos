import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom'
const ProductList = (props) => {

    const { removeFromDom } = props;
    const deleteProd = (productoId) => {
        axios.delete('http://localhost:8000/api/producto/' + productoId)
            .then(res => {
                removeFromDom(productoId);
            })
    }
    return (
        <div>
            {props.prod.map((producto, idx)=>{
                return <div key={idx} className="box">
                        <h2>{producto.titulo}</h2>
                        <h4>{producto.precio}$</h4>
                        <p>{producto.descripcion}</p>
                        <Link to={`/producto/${producto._id}`}>Detalle</Link>
                        <button onClick={(e)=>{deleteProd(producto._id)}}>Eliminar Producto</button>
                    </div>
            })}
        </div>
    )
}
export default ProductList;