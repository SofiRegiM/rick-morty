// Import necessary methods and tools from testing libraries
import { test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

// Import the component to be tested
import TextField from './TextField';

// Test for rendering as text input
test('TextField renders as input', () => {
  render(<TextField data-testid="text" as="text" dataTestId={''} />);
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});

// Test for rendering as number input
test('TextField renders as number input', () => {
  render(<TextField data-testid="number" as="number" dataTestId={''} />);
  expect(screen.getByRole('spinbutton')).toBeInTheDocument();
});

// Test for updating value on user input
test('TextField updates value on change', () => {
  render(<TextField data-testid="text" as="text" dataTestId={'input-test'} />);
  const input = screen.getByTestId('input-test') as HTMLInputElement; // Type assertion here
  fireEvent.change(input, { target: { value: 'Hello World' } });
  expect(input.value).toBe('Hello World');
});