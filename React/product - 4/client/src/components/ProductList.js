import React from 'react'

import{Link} from'@reach/router';
import{navigate} from'@reach/router';
import axios from 'axios';





const ProductList= (props)=> {

    const { removeFromDom } = props;


    const deleteProduct = (productId)=>{
        console.log(productId);
        axios.delete('http://localhost:8000/api/product/' + productId)
        .then(removeFromDom(productId))

        

    
    }
    return (
        <div>
{
    
props.product.map((value,index) => {

return <p  key={value._id}> <Link to={`/${value._id}`}> {value.title} </Link>
<button ><Link to={`/${value._id}/edit`}>Edit</Link></button>

<button onClick={(e)=>{deleteProduct(value._id)}}>
                        Delete
                    </button>
 </p>



}) 

}

          
        </div>
    )
}

export default ProductList
