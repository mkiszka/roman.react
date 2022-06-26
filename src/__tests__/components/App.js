import { render, screen } from '@testing-library/react';
import App from '../../components/App';
import RomanConverter from '../../components/RomanConverter';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Arabic to roman converter/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders default result of convertion made by RomanConverter', () => {
  render(<RomanConverter />);
  const element = screen.getByText(/Roman: none/i);
  expect(element).toBeInTheDocument();
});
