import DateInput from "@/component/DateInput";
import DateRangeComponent from "@/component/DateRange";
import Input from "@/component/Input";
import TextArea from "@/component/InputArea";
import Radio from "@/component/Radio";
import Select from "@/component/Select";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

type UserFormValues = {
  username: string;
  password: string;
  email: string;
  type: string;
  type2: string;
  dateOfBirth: Date;
  validityPeriod: {
    start: Date;
    end: Date;
  };
  description: string;
};

const ReactHookFormComponent = () => {
  const methods = useForm<UserFormValues>({
    defaultValues: {
      dateOfBirth: new Date(),
    },
    mode: "onChange",
  });
  const { handleSubmit } = methods;

  const submitHandler: SubmitHandler<UserFormValues> = (values) => {
    console.log("DUNG TRINH", values);
  };

  return (
    <FormProvider {...methods}>
      <div>React hook form</div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Input name="email" label="Email" required />
        <Input name="username" label="Username" required />
        <Input name="password" type="password" label="Password" required />
        <Radio
          id="type"
          options={[
            { value: "mfa", label: "MFA" },
            { value: "admin", label: "Admin" },
          ]}
        />
        <TextArea id="description" />
        <Select
          id="type2"
          label="Type 2"
          options={[
            { value: "mfa", label: "MFA" },
            { value: "admin", label: "Admin" },
          ]}
        />
        <DateInput id="dateOfBirth" />
        <DateRangeComponent
          startDateId="start"
          endDateId="end"
          id="validityPeriod"
        />
        <input type="submit" />
      </form>
    </FormProvider>
  );
};
export default ReactHookFormComponent;
