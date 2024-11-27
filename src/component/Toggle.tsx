import { IBaseInput } from "@/types/shared";
import { Switch, FormGroup, Text } from "@blueprintjs/core";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const ToggleComponent = ({ id, label }: IBaseInput<boolean>) => {
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
        render={({ field: { value, onChange } }) => (
          <Switch checked={value} onChange={onChange} />
        )}
      />
    </FormGroup>
  );
};

export default ToggleComponent;
