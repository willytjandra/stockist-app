import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders Stockist App text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Stockist App/i);
  expect(linkElement).toBeInTheDocument();
});
