import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';

test('renders learn react link', () => {
  render(<Provider><App /></Provider>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
