import type { Validate, FieldValues, ValidationRule } from "react-hook-form";

export type IValue = string | number;
export type IOption<T> = {
  value: T;
  label: string;
};

export type BaseDateInput = {
  minDate?: Date;
  maxDate?: Date;
};

export type BaseValidateForInput<T> = {
  required?: boolean;
  validate?:
    | Validate<T, FieldValues>
    | Record<string, Validate<T, FieldValues>>;
  min?: ValidationRule<number | string>;
  max?: ValidationRule<number | string>;
  maxLength?: ValidationRule<number>;
  minLength?: ValidationRule<number>;
};

export type IBaseInput<T> = BaseValidateForInput<T> & {
  id: string;
  label?: string;
};
