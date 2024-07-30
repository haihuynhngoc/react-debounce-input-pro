export interface CommonProps {
  value?: string;
  defaultValue?: string;
  delay?: number;
  minLength?: number;
  onChange?: (value: string) => void;
  onDebounce?: (value: string) => void;
  notifyOnEnter?: boolean;
  notifyOnBlur?: boolean;
}

export interface InputProps
  extends CommonProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof CommonProps> {
  element?: 'input';
}

export interface TextareaProps
  extends CommonProps,
    Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, keyof CommonProps> {
  element?: 'textarea';
}

export interface CustomElementProps<T extends React.ElementType>
  extends CommonProps {
  element?: T;
  elementProps?: Omit<React.ComponentProps<T>, keyof CommonProps>;
}

export type DebounceInputProps<T extends React.ElementType = 'input'> =
  | InputProps
  | TextareaProps
  | CustomElementProps<T>;
