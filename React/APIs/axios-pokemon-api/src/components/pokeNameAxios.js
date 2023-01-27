import React, {useEffect, useState} from 'react';
import axios from 'axios';

const PokeName = (props) => {
    const [pokemon, setPokemon] = useState([]);
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1154')
            .then(response=>{setPokemon(response.data.results)})
            .catch(err => console.log(err))
    }, []);

    return(
        <div>
            {pokemon.length > 0 && pokemon.map((pokemon, index) => {
                return (<div key={index}> {pokemon.name} </div>)
            })}
        </div>
    )
}

//know where data is going and what it looks like, ie an array in this case, but we can break this down further
//for axios always  response.data. whatever array you are looking for
export default PokeName;