import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import Pokedex from '../components/Pokedex';
import pokemons from '../data';

describe('testing Pokedex.js component', () => {
  it('should contain heading with Encountered Pokemons text', () => {
    const pokemon = [pokemons[0]];
    const { getByRole } = renderWithRouter(<Pokedex
      pokemons={ pokemon }
      isPokemonFavoriteById={ { 25: false } }
    />);
    expect(getByRole('heading', { level: 2 })).toHaveTextContent('Encountered pokémons');
  });

  it('should contain a button with próximo pokémon text', () => {
    const pokemon = [pokemons[0]];
    const { getByTestId } = renderWithRouter(<Pokedex
      pokemons={ pokemon }
      isPokemonFavoriteById={ { 25: false } }
    />);
    expect(getByTestId('next-pokemon')).toHaveTextContent('Próximo pokémon');
  });

  it('should show next pokemon when clicking next button', () => {
    const pokemon = [pokemons[0], pokemons[1]];
    const { getByTestId, getByText } = renderWithRouter(<Pokedex
      pokemons={ pokemon }
      isPokemonFavoriteById={ { 25: false, 4: false } }
    />);
    fireEvent.click(getByTestId('next-pokemon'));
    expect(getByText('Charmander')).toBeInTheDocument();
  });

  it('should show first pokemon when clicking next button after last pokemon', () => {
    const pokemon = [pokemons[0], pokemons[8]];
    const { getByTestId, getByText } = renderWithRouter(<Pokedex
      pokemons={ pokemon }
      isPokemonFavoriteById={ { 25: false, 148: false } }
    />);
    fireEvent.click(getByTestId('next-pokemon'));
    fireEvent.click(getByTestId('next-pokemon'));
    expect(getByText('Pikachu')).toBeInTheDocument();
  });

  it('should show only one pokemon at a time', () => {
    const pokemon = [pokemons[0], pokemons[1]];
    const { getAllByText } = renderWithRouter(<Pokedex
      pokemons={ pokemon }
      isPokemonFavoriteById={ { 25: false, 4: false } }
    />);
    expect(getAllByText('More details')).toHaveLength(1);
  });

  it('should have filter buttons', () => {
    const pokemon = [pokemons[0], pokemons[4], pokemons[5]];
    const { getByText, getAllByTestId, getByRole } = renderWithRouter(<Pokedex
      pokemons={ pokemon }
      isPokemonFavoriteById={ { 25: false, 65: false, 151: false } }
    />);
    const typeButton = getAllByTestId('pokemon-type-button');
    const psychicButton = getByRole('button', { name: 'Psychic' });
    const numberOfTypes = 2;
    expect(typeButton).toHaveLength(numberOfTypes);
    fireEvent.click(psychicButton);
    expect(getByText('Alakazam')).toBeInTheDocument();
  });

  it('should contain a reset filter button', () => {
    const pokemon = [pokemons[0], pokemons[1]];
    const { getByText } = renderWithRouter(<Pokedex
      pokemons={ pokemon }
      isPokemonFavoriteById={ { 25: false, 4: false } }
    />);
    const allButton = getByText('All');
    expect(allButton).toBeInTheDocument();
    fireEvent.click(allButton);
    const numberOfPokemons = 2;
    expect(pokemon).toHaveLength(numberOfPokemons);
  });

  test('next pokemon button must be disabled when theres only one pokemon', () => {
    const pokemon = [pokemons[0]];
    const { getByTestId, getByRole } = renderWithRouter(<Pokedex
      pokemons={ pokemon }
      isPokemonFavoriteById={ { 25: false } }
    />);
    const electricButton = getByRole('button', { name: 'Electric' });
    fireEvent.click(electricButton);
    expect(getByTestId('next-pokemon').disabled).toBe(true);
  });
});
