import { render, screen } from '@testing-library/react';
import ResultTable from './index';

test('render ResultTable component', () => {
  render(<ResultTable />);

  const numberHeaderElement = screen.getByText('#');
  expect(numberHeaderElement).toBeInTheDocument();

  const nameHeaderElement = screen.getByText('Name');
  expect(nameHeaderElement).toBeInTheDocument();

  const genderHeaderElement = screen.getByText('Gender');
  expect(genderHeaderElement).toBeInTheDocument();

  const birthYearHeaderElement = screen.getByText('Birth Year');
  expect(birthYearHeaderElement).toBeInTheDocument();

  const heightHeaderElement = screen.getByText('Height');
  expect(heightHeaderElement).toBeInTheDocument();

  const eyeColorHeaderElement = screen.getByText('Eye Color');
  expect(eyeColorHeaderElement).toBeInTheDocument();

  const hairColorHeaderElement = screen.getByText('Hair Color');
  expect(hairColorHeaderElement).toBeInTheDocument();

  const skinColorHeaderElement = screen.getByText('Skin Color');
  expect(skinColorHeaderElement).toBeInTheDocument();
});
