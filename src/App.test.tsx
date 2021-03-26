import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders react app', () => {
  const { getByText } = render(<App />);
  const appElement = getByText(/Generic Message Component Challenge/i);
  expect(appElement).toBeInTheDocument();
});