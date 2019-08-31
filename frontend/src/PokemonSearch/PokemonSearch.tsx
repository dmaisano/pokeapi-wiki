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
      <label className="w-full inline-flex items-center">
        <input
          type="text"
          className="form-input placeholder-gray-700 w-full rounded-r-none"
          placeholder="Search by Pokemon name"
        />
        <button className="btn btn-primary rounded-l-none">Search</button>
      </label>
    );
  }
}
