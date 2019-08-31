import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import PokemonSearch from '../PokemonSearch';
import Header from '../Header';
import NotFound from '../NotFound';

const Home: React.FC = () => {
  return (
    <div className="antialiased font-sans min-h-screen bg-gray-300">
      <Header />

      <div className="px-10 py-10">
        <PokemonSearch />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
