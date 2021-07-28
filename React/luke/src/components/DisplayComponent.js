import React,{useState,useEffect} from 'react'
import axios from 'axios';
import SearchComponent from './SearchComponent';

const DisplayComponent = (props) => {
const [responseData, setResponseData] = useState([]);

useEffect(()=>{
    axios.get('https://swapi.dev/api/'+props.cat+'/'+props.id)
        .then(response=>{setResponseData(response.data) } )
        
}, [props.id,props.cat]); 

return(


props.cat=="people"?<div>
<SearchComponent/>
 <h1>{responseData.name}</h1>

 height:{responseData.height}<br/>
 Mass:{responseData.mass}<br/>
 hair-color:{responseData.hair_color}<br/>
 skin-color:{responseData.skin_color}

</div>:
<div>
<SearchComponent/>
<h1>{responseData.name}</h1>

 climate:{responseData.climate}<br/>
 Terrain:{responseData.terrain}<br/>
 surface water:{responseData.surface_water}<br/>
 population:{responseData.population}
</div>


)


}

export default DisplayComponent
