"use client";

import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import FormFieldUi from "./FormField";
import CustomButton from "./CustomButton";
import { redirect } from "next/navigation";
import { useState } from "react";

const resetPasswordSchema = z
  .object({
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
    confirmPassword: z
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
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords don't match",
  });

type resetPasswordType = z.infer<typeof resetPasswordSchema>;

const ResetPasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<resetPasswordType>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { password: "", confirmPassword: "" },
    mode: "onTouched",
  });

  const submitHandler = async (data: any) => {
    //call the Api to modify the password
    //make sure to add the parameters to the url that are needed to reset the password
    console.log("handle modification");
    redirect("/sign-in");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-6">
        <FormFieldUi
          form={form}
          name="password"
          label="New Password"
          required
          type="password"
          description="The password must contain atleast 8 charaters including uppercase and lowercase letter and a number"
        />
        <FormFieldUi
          form={form}
          name="confirmPassword"
          label="Confirm Password"
          required
          type="password"
          description="Please confirm your new password."
        />
        <CustomButton
          textContext="Reset Password"
          loading={isLoading}
          type="submit"
        />
      </form>
    </Form>
  );
};

export default ResetPasswordForm;
