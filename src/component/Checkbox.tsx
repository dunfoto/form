import { IBaseInput } from "@/types/shared";
import { Checkbox, FormGroup, Text } from "@blueprintjs/core";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

function CheckboxComponent({
  id,
  label,
  required,
  validate,
}: IBaseInput<boolean>) {
  const {
    control,
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
        rules={{
          validate,
          required,
        }}
        render={({ field: { value, onChange } }) => (
          <Checkbox checked={value} onChange={onChange} />
        )}
      />
    </FormGroup>
  );
}

export default CheckboxComponent;
