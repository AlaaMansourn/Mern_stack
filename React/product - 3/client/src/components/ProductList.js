import React from 'react'

import{Link} from'@reach/router';

const ProductList= (props)=> {
    return (
        <div>
{
props.product.map((value,index) => {

return <p  key={value._id}> <Link to={`/${value._id}`}> {value.title} </Link> </p>



}) 

}

          
        </div>
    )
}

export default ProductList
