import React from 'react'
import { useState } from  'react';
import axios from 'axios';



const ProductForm = (props) => {
    console.log("hiiiiiiiiiiiiiiiii");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const createProduct = (e) => {
        
        e.preventDefault();
        
        const newProduct = {title: title, price: price,description:description};
        axios.post('http://localhost:8000/api/create/new', newProduct)
        .then(res=> {
            console.log("Response: " + res.data);
            setTitle("");
            setPrice("");
            setDescription("");
        })
        .catch(err => {
            console.log(err)
            console.log("eorrrrrrrrrrrrr")
        })

        
    };




    
    return (

        <div>
<form onSubmit={ createProduct } >
            <div>
                <input placeholder="title" type="text" onChange={ (e) => setTitle(e.target.value)} value={title} />
                
            </div>
            <div>
                <input placeholder="price" type="number" onChange={ (e) => setPrice(e.target.value) } value={price}/>
                
            </div>
            <div>
                <input placeholder="description" type="text" onChange={ (e) => setDescription(e.target.value) } value={description}/>
                
            </div>
            <input type="submit" value="Create " />
            
        </form>




        </div>
    )
}

export default ProductForm
