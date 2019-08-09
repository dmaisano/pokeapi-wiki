import * as React from 'react';
import styles from './PokemonSearch.module.css';

class PokemonSearchProps {}

class PokemonSearchState {
  error: boolean;
  pokemonName: string;
}

export default class PokemonSearch extends React.Component<
  PokemonSearchProps,
  PokemonSearchState
> {
  constructor(props: PokemonSearchProps) {
    super(props);

    this.state = {
      error: false,
      pokemonName: '',
    };
  }

  render() {
    const { pokemonName } = this.state;

    return (
      <form>
        <label className="block">{/*  */}</label>
      </form>
    );
  }
}
