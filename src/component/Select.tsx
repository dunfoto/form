import React from "react";
import Select, { Props as SelectProps } from "react-select";
import { useFormContext, Controller } from "react-hook-form";
import { FormGroup, Text } from "@blueprintjs/core";
import { IOption } from "@/types/shared";

interface RHFSelectProps<T> extends SelectProps {
  id: string;
  label: string;
  options: IOption<T>[];
}

const SelectComponent = <T,>({
  id,
  label,
  options,
  onChange,
}: RHFSelectProps<T>) => {
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
        render={({ field: { value } }) => (
          <Select
            value={options.find((o) => o.value == value)}
            options={options}
            onChange={(item, actionMeta) => {
              if (item == null) {
                return;
              }
              onChange?.(item, actionMeta);
              setValue(id, item.value);
            }}
          />
        )}
      />
    </FormGroup>
  );
};

export default SelectComponent;
