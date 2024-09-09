import React from 'react';
import { render, screen } from '@testing-library/react';
import { Content } from './Content';

test('renders learn react link', () => {
  render(<Content />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
