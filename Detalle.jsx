import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
const Detalle = (props) => {
    const [producto, setProducto] = useState({})
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = (prodId) => {
        axios.delete(`http://localhost:8000/api/producto/${id}`)
            .then(res => {
                navigate('/');
            })

    }
    useEffect(() => {
        axios.get(`http://localhost:8000/api/producto/${id}`)
            .then(res => setProducto({
                ...res.data
            }))
    }, [id])
    return (
        <>
            <div className="box">
                <h2>{producto.titulo}</h2>
                <h4>{producto.precio}$</h4>
                <p>{producto.descripcion}</p>
                <Link to={"/producto/" + producto._id + "/edit"}>
                    Edit
                </Link>
                <button onClick={(e)=>{handleDelete(producto._id)}}>Eliminar</button>
            </div>
        </>
    )
}
export default Detalle;
/*  */