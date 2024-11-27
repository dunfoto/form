/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBaseInput } from "@/types/shared";
import { FormGroup, Text } from "@blueprintjs/core";
import DateInput from "react-datepicker";
import { Controller, useFormContext } from "react-hook-form";

type IProps = IBaseInput<any> & {
  startDateId?: string;
  endDateId?: string;
  onChange?: (v: {
    [K in keyof IProps as IProps[K] extends string ? K : never]?: Date | null;
  }) => void;
  maxDate?: Date;
  minDate?: Date;
};

const DateRangeComponent = ({
  id,
  label,
  onChange,
  startDateId = "startDate",
  endDateId = "endDate",
  required,
  minDate,
  maxDate,
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
        rules={{
          required: required,
        }}
        render={({ field: { value } }) => (
          <DateInput
            id={id}
            name={id}
            startDate={value?.[startDateId]}
            endDate={value?.[endDateId]}
            selectsRange
            maxDate={maxDate}
            minDate={minDate}
            onChange={(date) => {
              const val: {
                [key in typeof startDateId | typeof endDateId]: Date | null;
              } = {};
              val[startDateId] = date[0];
              val[endDateId] = date[1];
              if (onChange) {
                onChange(val);
              } else {
                setValue(id, val);
              }
            }}
          />
        )}
      />
    </FormGroup>
  );
};

export default DateRangeComponent;
