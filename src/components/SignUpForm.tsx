"use client";

import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import FormFieldUi from "./FormField";
import CustomButton from "./CustomButton";
import { useState } from "react";

const SignInSchema = z.object({
  name: z.string().min(1, { message: "name is required" }),
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
  email: z.string().email().min(1, { message: "email is required" }),
});

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);

    setTimeout(() => {
      alert("Sign-up successful!");
      setIsLoading(false);
    }, 2000); // Simulating API call delay
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
        <CustomButton textContext="Sign up" loading={isLoading} type="submit" />
      </form>
    </Form>
  );
};

export default SignUpForm;
