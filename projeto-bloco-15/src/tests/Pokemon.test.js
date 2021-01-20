import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import Pokemon from '../components/Pokemon';
import pokemons from '../data';

describe('testing Pokemon.js component', () => {
  it('should render a card with a certain pokemon info', () => {
    const pokemon = pokemons[0];
    const { getByTestId, getAllByRole } = renderWithRouter(<Pokemon
      pokemon={ pokemon }
      isFavorite
    />);

    const name = getByTestId('pokemon-name');
    expect(name).toHaveTextContent('Pikachu');

    const type = getByTestId('pokemonType');
    expect(type).toHaveTextContent('Electric');

    const weight = getByTestId('pokemon-weight');
    expect(weight).toHaveTextContent('Average weight: 6.0 kg');

    const { src, alt } = getAllByRole('img')[0];
    expect(src).toBe('https://cdn.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(alt).toBe('Pikachu sprite');
  });

  it('should contain a link for more details', () => {
    const pokemon = pokemons[0];
    const { getByText, history } = renderWithRouter(<Pokemon
      pokemon={ pokemon }
      isFavorite
    />);

    const details = getByText('More details');
    fireEvent.click(details);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');
  });

  test('favorited pokemons should have a star icon', () => {
    const pokemon = pokemons[0];
    const { getAllByRole } = renderWithRouter(<Pokemon
      pokemon={ pokemon }
      isFavorite
    />);

    const { src, alt } = getAllByRole('img')[1];
    expect(src).toContain('/star-icon.svg');
    expect(alt).toBe('Pikachu is marked as favorite');
  });
});
