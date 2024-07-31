# react-debounce-input-pro

A lightweight (~5KB) React component for debounced input handling, with full TypeScript support.

## Features

- Debounced input handling
- Configurable delay
- Minimum length for debounce
- Supports controlled and uncontrolled modes
- Flexible input element (input, textarea, or custom component)
- TypeScript support

## Description

`react-debounce-input-pro` is a highly customizable React component designed to manage debounced user input. It was built to provide a flexible solution for handling input fields, reducing unnecessary updates and API calls, and enhancing performance in applications. This component supports various HTML elements, offers configurable debounce intervals, and includes features like notifying on enter key press and blur events.

## Table of Contents

- [Installation](#installation)
- [Demo](#demo)
- [Usage](#usage)
- [API](#api)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)

## Installation

Follow these steps to install the DebounceInput component:

Install the package via npm:
   ```bash
   npm install react-debounce-input-pro
   ```
or via yarn:
   ```bash
   yarn add react-debounce-input-pro
   ```

## Demo

Check out the live demo on [CodeSandbox](https://57nsfv.csb.app/)


## Usage

Here are some examples of how to use the DebounceInput component in your React projects:

### Basic Usage with Default Props


```tsx
import React, { useState } from 'react';
import { DebounceInput } from 'react-debounce-input-pro';

const Example = () => {
  const [value, setValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  return (
    <DebounceInput
      value={value}
      onChange={setValue}
      onDebounce={setDebouncedValue}
    />
  );
};

export default Example;
```

### Custom Delay and Minimum Length


```tsx
import React, { useState } from 'react';
import { DebounceInput } from 'react-debounce-input-pro';

const Example = () => {
  const [value, setValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  return (
    <DebounceInput
      value={value}
      onChange={setValue}
      onDebounce={setDebouncedValue}
      delay={500}
      minLength={3}
    />
  );
};

export default Example;
```

### Using Custom HTML Element (Textarea)


```tsx
import React, { useState } from 'react';
import { DebounceInput } from 'react-debounce-input-pro';

const Example = () => {
  const [value, setValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  return (
    <DebounceInput
      element="textarea"
      value={value}
      onChange={setValue}
      onDebounce={setDebouncedValue}
      rows={4}
      cols={50}
    />
  );
};

export default Example;
```

### Using Custom Component with Custom Props


```tsx
import React, { useState } from 'react';
import { DebounceInput } from 'react-debounce-input-pro';

type CustomerInputProps = {
  firstProp: string;
  secondProp: string;
};

const CustomInput = (props: CustomerInputProps) => <input {...props} />;

const Example = () => {
  const [value, setValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  return (
    <DebounceInput
      value={value}
      onChange={setValue}
      onDebounce={setDebouncedValue}
      element={CustomInput}
      elementProps={{ firstProp: 'value', secondProp: 'value' }}
    />
  );
};

export default Example;
```

## API

| Prop           | Type                                       | Default     | Description |
|----------------|--------------------------------------------|-------------|-------------|
| `value`        | `string`                                   | `''`        | The current value of the input. |
| `defaultValue` | `string`                                   | `''`        | The initial value of the input (for uncontrolled mode). |
| `delay`        | `number`                                   | `300`       | The debounce delay in milliseconds. |
| `minLength`    | `number`                                   | optional | The minimum length of the input to trigger debounce. |
| `onChange`     | `(value: string) => void`                  | optional | Callback function called on every input change. |
| `onDebounce`   | `(value: string) => void`                  | optional | Callback function called after the debounce delay. |
| `notifyOnEnter`| `boolean`                                  | `true`      | Skipping debounce, invoke the value immediately on press Enter |
| `notifyOnBlur` | `boolean`                                  | `true`      | Skipping debounce, invoke the value immediately on input blur |
| `element`      | `React.ElementType`                        | `'input'`, `'textarea'`, `CustomInput`   | The HTML element or custom component to use. |
| `elementProps` | `React.ComponentPropsWithoutRef<T>`        | optional | Additional props for the custom component. |

## Credits

- **Author**: [Hai Huynh Ngoc](https://github.com/haihuynhngoc)

## License

This project is licensed under the MIT License.

## How to Contribute

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feat/your-feature-branch`).
3. Commit your changes (`git commit -m 'feat: add your-feature-name'`).
4. Push to the branch (`git push origin feat/your-feature-branch`).
5. Open a Pull Request.

## Tests

To run tests, use the following command:

```bash
npm test
```

Make sure to write tests for any new features or changes to ensure code quality.