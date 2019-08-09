import * as React from 'react';
import smogon from '../svg/smogon.svg';
import styles from './Header.module.css';

export default class Header extends React.Component<{}, {}> {
  render() {
    return (
      <header className="bg-gray-900 flex items-center px-6 py-3">
        <img src={smogon} alt="logo" className="h-16" />

        <h1 className="ml-4 text-3xl font-semibold text-white">
          Pokemon Pokedex
        </h1>
      </header>
    );
  }
}
