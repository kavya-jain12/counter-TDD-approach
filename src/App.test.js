import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Counter Heading', () => {
  render(<App />);
  const text = screen.getByText("Counter");
  expect(text).toBeInTheDocument();
});
