import {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  customProp?: string;
}

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  customProp?: string;
}

export type SubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export interface DivProps {
  children?: any;
  className?: string;
}

export interface EventListener {
  (e: Event): void;
}

export interface LinkButtonProps {
  children?: any;
  className?: string;
  to: string;
  bg?: string;
}
