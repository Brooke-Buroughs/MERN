import PokeName from './components/pokeNameAxios';
import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header className="formatName">
        <PokeName />
      </header>
    </div>
  );
}

export default App;
