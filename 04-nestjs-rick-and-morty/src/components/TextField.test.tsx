// Import necessary methods and tools from testing libraries
import { test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import TextField from './TextField';

// Test for rendering as text input
test('TextField renders as input', () => {
  render(<TextField data-testid="text-input" as="text" />);
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});

// Test for rendering as number input
test('TextField renders as number input', () => {
  render(<TextField data-testid="number-input" as="number" />);
  expect(screen.getByRole('spinbutton')).toBeInTheDocument();
});

// Test for updating value on user input
test('TextField updates value on change', () => {
  render(<TextField data-testid="input-test" as="text" />);
  const input = screen.getByTestId('input-test') as HTMLInputElement;
  fireEvent.change(input, { target: { value: 'Hello World' } });
  expect(input.value).toBe('Hello World');
});

// Test for onFocus event
test('TextField calls onFocus when focused', () => {
  const handleFocus = vi.fn();
  render(<TextField data-testid="focus-test" as="text" onFocus={handleFocus} />);
  const input = screen.getByTestId('focus-test') as HTMLInputElement;
  fireEvent.focus(input);
  expect(handleFocus).toHaveBeenCalledTimes(1);
});

// Test for onBlur event
test('TextField calls onBlur when focus is lost', () => {
  const handleBlur = vi.fn();
  render(<TextField data-testid="blur-test" as="text" onBlur={handleBlur} />);
  const input = screen.getByTestId('blur-test') as HTMLInputElement;
  fireEvent.blur(input);
  expect(handleBlur).toHaveBeenCalledTimes(1);
});

// Test for aria-label accessibility
test('TextField has appropriate aria-label', () => {
  render(<TextField data-testid="aria-label-test" as="text" ariaLabel="test input" />);
  const input = screen.getByTestId('aria-label-test') as HTMLInputElement;
  expect(input).toHaveAttribute('aria-label', 'test input');
});

// Test for correct type attribute
test('TextField sets correct type attribute based on "as" prop', () => {
  render(<TextField data-testid="type-test" as="text" />);
  const inputText = screen.getByTestId('type-test') as HTMLInputElement;
  expect(inputText.type).toBe('text');

  render(<TextField data-testid="type-test-number" as="number" />);
  const inputNumber = screen.getByTestId('type-test-number') as HTMLInputElement;
  expect(inputNumber.type).toBe('number');
});

// Test for default properties
test('TextField renders with default properties', () => {
  render(<TextField as="text" />);
  const input = screen.getByRole('textbox') as HTMLInputElement;
  expect(input).toBeInTheDocument();
});