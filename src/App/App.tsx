import React from 'react';
import PokemonSearch from '../PokemonSearch';
import Header from '../Header';

const App: React.FC = () => {
  return (
    <div className="antialiased font-sans min-h-screen bg-gray-300">
      <Header />

      <div className="px-10 py-10">
        <PokemonSearch />
      </div>
    </div>
  );
};

export default App;
