import React, { ChangeEventHandler } from "react";
import { FormGroup, InputGroup, Text } from "@blueprintjs/core";
import { HTMLInputTypeAttribute } from "react";
import { useFormContext } from "react-hook-form";
import type { Validate, FieldValues } from "react-hook-form";

type IInput = {
  name: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  validate?:
    | Validate<string, FieldValues>
    | Record<string, Validate<string, FieldValues>>;
  required?: boolean;
};

const InputGroupComponent = (props: IInput) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { name, label, type, required, validate, onChange } = props;
  const { ref, ...rest } = register(name, {
    required: `${name} is required`,
    validate: validate,
  });

  return (
    <FormGroup
      label={label}
      helperText={
        errors?.[name]?.message ? (
          <Text>{errors[name].message.toString()}</Text>
        ) : undefined
      }
      labelInfo={required ? "*" : ""}
    >
      <InputGroup
        id={name}
        type={type}
        inputRef={ref}
        {...rest}
        onChange={(e) => {
          onChange?.(e);
          rest.onChange(e);
        }}
      />
    </FormGroup>
  );
};

export default InputGroupComponent;
