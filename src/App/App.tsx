import React from 'react';
import PokemonSearch from '../PokemonSearch';
import Header from '../Header';

const App: React.FC = () => {
  return (
    <div className="antialiased font-sans">
      <Header />

      <PokemonSearch />
    </div>
  );
};

export default App;
