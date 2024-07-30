import React, { useState, useEffect } from 'react';
import { CustomElementProps, DebounceInputProps } from '../types';
import { useDebounce } from '../hooks/useDebounce';

const DebounceInput = <T extends React.ElementType = 'input'>({
  value,
  defaultValue = '',
  delay = 300,
  minLength,
  onChange,
  onDebounce,
  notifyOnEnter = true,
  notifyOnBlur = true,
  element: Element = 'input',
  ...rest
}: DebounceInputProps<T>) => {
  const [inputValue, setInputValue] = useState<string>(defaultValue);

  useEffect(() => {
    if (value !== undefined) {
      setInputValue(value);
    }
  }, [value]);

  const debouncedChangeHandler = useDebounce((val) => {
    if (minLength === undefined || val.length >= minLength) {
      onDebounce?.(val);
    }
  }, delay);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | any>,
  ) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
    debouncedChangeHandler(newValue);
  };

  const handleBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | any>,
  ) => {
    if (notifyOnBlur) {
      onDebounce?.(event.target.value);
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement | any>,
  ) => {
    if (event.key === 'Enter' && notifyOnEnter) {
      onDebounce?.(inputValue);
    }
  };

  const { elementProps, ...otherProps } = rest as CustomElementProps<T>;

  return (
    <Element
      value={inputValue}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      {...elementProps}
      {...otherProps}
    />
  );
};

export default DebounceInput;
