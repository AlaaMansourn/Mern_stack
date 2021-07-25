import React,{useState} from 'react'
import axios from 'axios';


const PokemonComponent = () => {


    const [pokemon,setPokemon]=useState("");

    const handelclick = () =>{

        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807').then(response=>{
            
            setPokemon(response.data.results)
})


        
    }




    return (
        <div>


        <button onClick={handelclick}>fetch all pokemon </button>


        {

pokemon.map((value,index)=>{


    

        return <p>{value.name}</p>




    



}



)    


}
       

        </div>
    )
}
export default PokemonComponent
