import axios from 'axios';
import React, { useEffect, useState } from 'react';

import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = () => {
const[product,setProduct]=useState([]);


useEffect(()=>{
axios.get('http://localhost:8000/api/products')
.then(res=>setProduct(res.data))
.catch(err=>err)
},[]);


const removeFromDom = productId => {
  setProduct(product.filter(product => product._id != productId));

}





    return (
        <div>
          <ProductForm/>
          <ProductList product={product} removeFromDom={removeFromDom}/>
        </div>
    )
}

export default Main
