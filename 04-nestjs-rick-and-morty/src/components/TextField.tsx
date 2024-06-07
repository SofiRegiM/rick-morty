import React from 'react';

interface TextFieldProps {
  as: 'text' | 'number';
  'data-testid'?: string;
  ariaLabel?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
}

const TextField: React.FC<TextFieldProps> = ({ as, 'data-testid': testId, ariaLabel, onBlur, onFocus }) => {
  return (
    <input
      type={as}
      data-testid={testId}
      aria-label={ariaLabel}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
};

export default TextField;