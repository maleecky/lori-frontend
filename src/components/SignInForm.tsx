"use client";

import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import FormFieldUi from "./FormField";
import CustomButton from "./CustomButton";
import { useState } from "react";

const SignInSchema = z.object({
  email: z.string().min(1, { message: "email is required" }),
  password: z
    .string()
    .min(8, { message: "The password must be 8 characters long" })
    .regex(/(?=.*[a-z])/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/(?=.*[A-Z])/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/(?=.*[0-9])/, {
      message: "Password must contain at least one number",
    }),
});

const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitHandler = async (data: any) => {
    console.log(data);
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      alert("Sign-in successful!");
      setIsLoading(false);
    }, 2000); // Simulating API call delay
    // Call your sign-in API here
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-6">
        <FormFieldUi
          form={form}
          name="email"
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
        <CustomButton textContext="Sign in" loading={isLoading} type="submit" />
      </form>
    </Form>
  );
};

export default SignInForm;
