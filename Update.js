import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const { id } = useParams();
    const [titulo, setTitulo] = useState(""); 
    const [precio, setPrecio] = useState("");
    const [descripcion, setDecripcion] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/producto/${id}`)
            .then(res => {
                setTitulo(res.data.titulo);
                setPrecio(res.data.precio);
                setDecripcion(res.data.descripcion);
            })
    }, [id])
    const updatePerson = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/producto/${id}`, {
            titulo,
            precio,
            descripcion
        })
            .then(res => console.log(res));
            navigate('/');
    }
    return (
        <form onSubmit={updatePerson} className="box">
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
export default Update;