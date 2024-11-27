import React from "react"
import { IBaseInput } from "@/types/shared";
import { FormGroup, Text } from "@blueprintjs/core";
import { useFormContext } from "react-hook-form";
const InputAreaComponent = (props: IBaseInput<string>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { id, label } = props;
  const { ...rest } = register(id);
  return (
    <FormGroup
      label={label}
      helperText={
        errors?.[id]?.message ? (
          <Text>{errors[id].message.toString()}</Text>
        ) : undefined
      }
    >
      <textarea id={id} {...rest} />
    </FormGroup>
  );
};

export default InputAreaComponent;
