
import React,{useState,useEffect} from 'react'
import axios from 'axios';

const Update = (props) => {
const {id}= props;
const[title,setTitle]=useState("");
const[price,setPrice]=useState("");
const[description,setDescription]=useState("");



useEffect(()=>{
axios.get('http://localhost:8000/api/product/'+id)
.then(res=>{
setTitle(res.data.title);
setPrice(res.data.price);
setDescription(res.data.description)
})
},[])

const updateProduct = e=> {

e.preventDefault();

axios.put('http://localhost:8000/api/product/'+id+'/edit',{title,price,description})
.then(res=>console.log(res));

}
    
    
    
    
    
    





    return (
        <div>
           <form onSubmit={ updateProduct } >
            <div>
                <input placeholder="title" type="text" onChange={ (e) => setTitle(e.target.value)} value={title} />
                
            </div>
            <div>
                <input placeholder="price" type="number" onChange={ (e) => setPrice(e.target.value) } value={price}/>
                
            </div>
            <div>
                <input placeholder="description" type="text" onChange={ (e) => setDescription(e.target.value) } value={description}/>
                
            </div>
            <input type="submit" value="update " />
            
        </form>

 
        </div>
    )
}

export default Update
