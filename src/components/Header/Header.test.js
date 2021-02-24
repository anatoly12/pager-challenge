import { render, screen } from '@testing-library/react';
import Header from './index';

test('render Header component', () => {
  render(<Header onSearch={() => {}} setValue={() => {}} />);

  const brandElement = screen.getByText('Pager Challenge');
  expect(brandElement).toBeInTheDocument();

  const requirementsLinkElement = screen.getByText('Requirements');
  expect(requirementsLinkElement).toBeInTheDocument();

  const searchButtonElement = screen.getByText('Search');
  expect(searchButtonElement).toBeInTheDocument();
});
