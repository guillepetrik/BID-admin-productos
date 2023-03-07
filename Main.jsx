import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import ProductoForm from './ProductoForm';
const Main = () => {

    const [prod, setProd] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/producto')
            .then(res=>{
                setProd(res.data);
                setLoaded(true);
            });
    },[prod])

    const removeFromDom = (productoId) => {
        setProd(prod.filter(prod => prod._id !== productoId));
    }

    return (
        <div className="container">
            <h1>Agregar Producto</h1>
            <ProductoForm />
            <hr />
            <h2>Productos en Inventario</h2>
            { loaded && <ProductList prod={ prod } removeFromDom={removeFromDom}/> }
        </div>
    )
}
export default Main;
