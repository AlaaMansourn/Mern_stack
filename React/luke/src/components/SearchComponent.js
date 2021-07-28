import React,{useState} from 'react'
import { navigate } from '@reach/router'


const SearchComponent = (props) => {

const [id, setId] = useState("");
const[cat,setCat]=useState("people");
const handelclick=(e,cat,id)=>{

    e.preventDefault()
    console.log(id);
    console.log(cat);
    navigate('/'+cat+'/'+id)
}
    return (
        <div>
            <form>
          <select onChange={e=>setCat(e.target.value)}>
              
             <option value="people">
                 people
                 
                 </option> 
              <option value="planets">

                  planets
              </option>
              
              </select>
              <input type="text" onChange={e=>setId(e.target.value)} value={id}></input> 
              <input type="submit" value="search" onClick={(e)=>handelclick(e,cat,id)}></input> 
              </form>
        </div>
    )
}

export default SearchComponent
