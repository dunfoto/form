import { IOption, IValue } from "@/types/shared";
import { FormGroup, RadioGroup, Radio, Text } from "@blueprintjs/core";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type IProps<T> = { id: string; label?: string; options: IOption<T>[] };

const RadioComponent = <T extends IValue>({
  id,
  label,
  options,
}: IProps<T>) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={id}
      control={control}
      render={({ field, formState: { errors } }) => (
        <FormGroup
          helperText={
            errors?.[id]?.message ? (
              <Text>{errors[id].message.toString()}</Text>
            ) : undefined
          }
        >
          <RadioGroup
            label={label}
            onChange={field.onChange}
            selectedValue={field.value}
          >
            {options.map((o, i) => (
              <Radio
                id={`${id}_${i}`}
                key={`${id}_${i}`}
                value={o.value.toString()}
                label={o.label}
                name={`${id}_${i}`}
              />
            ))}
          </RadioGroup>
        </FormGroup>
      )}
    />
  );
};

export default RadioComponent;
