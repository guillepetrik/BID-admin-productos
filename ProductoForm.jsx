import React, { useState } from 'react'
import axios from 'axios';
const ProductoForm = () => {
    const [titulo, setTitulo] = useState(""); 
    const [precio, setPrecio] = useState("");
    const [descripcion, setDecripcion] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/producto', {
            titulo,
            precio,
            descripcion
        })
            .then(res=>{
                setTitulo("");
                setPrecio("");
                setDecripcion("");
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Titulo</label><br/>
                <input type="text" onChange = {(e)=>setTitulo(e.target.value)} value={titulo}/>
            </p>
            <p>
                <label>Precio</label><br/>
                <input type="text" onChange = {(e)=>setPrecio(e.target.value)} value={precio}/>
            </p>
            <p>
                <label>Descripcion</label><br/>
                <input type="text" onChange = {(e)=>setDecripcion(e.target.value)} value={descripcion}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
export default ProductoForm;