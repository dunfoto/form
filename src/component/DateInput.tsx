import { FormGroup, Text } from "@blueprintjs/core";
import React from "react";
import DateInput from "react-datepicker";
import { useFormContext, Controller } from "react-hook-form";
import type { Validate, FieldValues } from "react-hook-form";

type IProps = {
  id: string;
  label?: string;
  onChange?: (v: Date | null) => void;
  validate?:
    | Validate<Date, FieldValues>
    | Record<string, Validate<Date, FieldValues>>;
  required?: boolean;
};

const DateInputComponent = ({
  id,
  label,
  onChange,
  required,
  validate,
}: IProps) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  return (
    <FormGroup
      label={label}
      helperText={
        errors?.[id]?.message ? (
          <Text>{errors[id].message.toString()}</Text>
        ) : undefined
      }
    >
      <Controller
        name={id}
        control={control}
        rules={{ required: required, validate: validate }}
        render={({ field: { value } }) => (
          <DateInput
            id={id}
            name={id}
            selected={value}
            onChange={(date) => {
              onChange?.(date);
              setValue(id, date);
            }}
          />
        )}
      />
    </FormGroup>
  );
};

export default DateInputComponent;
