import React from 'react';
import { render } from '@testing-library/react';
import FavoritePokemons from '../components/FavoritePokemons';
import renderWithRouter from '../renderWithRouter';
import pokemons from '../data';

describe('testing FavoritePokemon.js component', () => {
  it('should show No favorite pokemon found message if no pokemon is favorited', () => {
    const { getByText } = render(<FavoritePokemons />);
    expect(getByText('No favorite pokemon found')).toBeInTheDocument();
  });

  it('should show all favorite pokemon cards', () => {
    const favorites = [pokemons[0], pokemons[1]];
    const { getByText,
      queryByText } = renderWithRouter(<FavoritePokemons pokemons={ favorites } />);
    expect(getByText('Pikachu')).toBeInTheDocument();
    expect(getByText('Charmander')).toBeInTheDocument();
    expect(queryByText('Caterpie')).not.toBeInTheDocument();
  });
});
