import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

let getByText;

beforeEach(() => {
  // render the comcomponent before each test
  const component = render(<Counter />);
  getByText = component.getByText;
});

// evaluate if the counter start in 0 value.
test('Should display 0 as an initial value', () => {
  expect(getByText('0')).toBeInTheDocument();
});


// Should increment the counter by 1 
test('Should increment the counter', () => {
  const incrementButton = getByText('+');

  fireEvent.click(incrementButton);
  expect(getByText('1')).toBeInTheDocument();
});

test('Should decrement the counter', () => {
  const incrementButton = getByText('+');
  const decrementButton = getByText('-');

  fireEvent.click(incrementButton);
  fireEvent.click(decrementButton);
  expect(getByText('0')).toBeInTheDocument();
});

test('should disable the incrementer when it is less than 1', () => {
  const decrementButton = getByText('-');

  fireEvent.click(decrementButton);
  expect(decrementButton).toBeDisabled();

});

test('should disabled the button when its equal to 10', () => {
  const incrementButton = getByText('+');

  for (let i = 0; i < 11; i++) {
    fireEvent.click(incrementButton);
  }

  expect(incrementButton).toBeDisabled();
});

test('should disabled the button reset when the counter its equal to 0', () => {
  const incrementButton = getByText('+');
  const resetButton = getByText('AC');

  fireEvent.click(incrementButton);
  fireEvent.click(resetButton);

  expect(resetButton).toBeDisabled();
});

test('should reset the value to = when Ac button is selected', () => {
  const incrementButton = getByText('+');
  const resetButton = getByText('AC');

  fireEvent.click(incrementButton);
  fireEvent.click(resetButton);

  expect(getByText('0')).toBeInTheDocument();

});