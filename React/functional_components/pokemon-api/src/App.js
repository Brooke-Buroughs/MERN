import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [pokemon, setPokemon] = useState([])

  const Display = props => {
    const { pokemon } = props;
    console.log(pokemon)
    return (
      <div>
        {
          pokemon.map( (name, i) => (
            <p key={ i }>{ name }</p>
          ))
        }
      </div>
    )
  }

  return (
    <Display />
  );
}

//


export default App;
