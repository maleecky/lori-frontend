"use client";

import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import FormFieldUi from "./FormField";
import CustomButton from "./CustomButton";

const SignInSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

const SignInForm = () => {
  const form = useForm({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const submitHandler = async (data: any) => {
    console.log(data);
    // Call your sign-in API here
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-6">
        <FormFieldUi
          form={form}
          name="username"
          label="Username or email address"
          type="text"
        />
        <FormFieldUi
          form={form}
          name="password"
          label="Password"
          type="password"
          forgotPassword
        />
        <CustomButton textContext="Sign in" type="submit" />
      </form>
    </Form>
  );
};

export default SignInForm;
