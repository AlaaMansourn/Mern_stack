import React,{useState} from 'react'

const PokemonComponent = () => {

const [pokemon,setPokemon]=useState([]);

    const handelclick = e=>{

        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response => {
          return response.json();
      }).then(response => {
         setPokemon(response.results);
      }).catch(err=>{
          console.log(err);
      });



        
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
