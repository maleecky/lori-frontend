"use client";

import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import FormFieldUi from "./FormField";
import CustomButton from "./CustomButton";

const SignInSchema = z.object({
  name: z.string().min(1, { message: "name is required" }),
  password: z.string().min(1, { message: "Password is required" }),
  email: z.string().email().min(1, { message: "email is required" }),
});

const SignUpForm = () => {
  const form = useForm({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      name: "",
      password: "",
      email: "",
    },
  });

  const submitHandler = async (data: any) => {
    console.log(data);
    // Call your sign-up API here
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-6">
        <FormFieldUi
          form={form}
          name="name"
          label="Full name"
          required
          type="text"
        />
        <FormFieldUi
          form={form}
          name="email"
          label="Email"
          required
          type="email"
        />
        <FormFieldUi
          form={form}
          name="password"
          label="Password"
          type="password"
          required
          description="The password must contain atleast 8 charaters including uppercase and lowercase letter and a number"
        />
        <CustomButton textContext="Sign up" type="submit" />
      </form>
    </Form>
  );
};

export default SignUpForm;
