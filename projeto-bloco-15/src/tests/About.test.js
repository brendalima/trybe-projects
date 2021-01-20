import React from 'react';
import { render } from '@testing-library/react';
import About from '../components/About';

describe('testing About.js component', () => {
  test('page should contain pokédex info', () => {
    const { getByText } = render(<About />);
    expect(getByText('About Pokédex')).toBeInTheDocument();
  });

  it('should contain a h2 header with About Pokédex text', () => {
    const { getByRole } = render(<About />);
    expect(getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('should contain two paragraphs with Pokedex text', () => {
    const { getByText } = render(<About />);
    const firstPPart1 = 'This application simulates a Pokédex,';
    const firstPPart2 = ' a digital encliclopedia containing all Pokémons';
    const secondPPart1 = 'One can filter Pokémons by type,';
    const secondPPart2 = ' and see more details for each one of them';
    expect(getByText(firstPPart1 + firstPPart2)).toBeInTheDocument();
    expect(getByText(secondPPart1 + secondPPart2)).toBeInTheDocument();
  });

  it('should contain an image', () => {
    const { getByRole } = render(<About />);
    const img = getByRole('img').src;
    expect(img).toBe('https://cdn.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
