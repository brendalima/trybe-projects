import React from 'react';
import { render } from '@testing-library/react';
import NotFound from '../components/NotFound';

describe('testing NotFound.js component', () => {
  it('should contain a heading with Page requested not found text', () => {
    const { getByText } = render(<NotFound />);
    expect(getByText('Page requested not found')).toBeInTheDocument();
    expect(getByText('😭')).toBeInTheDocument();
  });

  it('should contain a specific gif image', () => {
    const { getAllByRole } = render(<NotFound />);
    const img = getAllByRole('img')[1].src;
    expect(img).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
