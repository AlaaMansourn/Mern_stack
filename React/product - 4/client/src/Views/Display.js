import React,{useState,useEffect} from 'react';
import axios from 'axios';
const Display = ({id}) => {

const [product, setProduct] = useState({});

    useEffect(() => {
        
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res => setProduct(res.data))
        
        .catch(err => setProduct(err))
    }, []);

    return (
        <div>
            
            <h1>{product.title}</h1>
            <h3>${product.price}</h3>
            <h3>Description: {product.description}</h3>
        </div>
    )
}

export default Display
