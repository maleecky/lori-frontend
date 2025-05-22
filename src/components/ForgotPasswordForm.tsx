"use client";

import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import FormFieldUi from "./FormField";
import CustomButton from "./CustomButton";
import { useState } from "react";
import { redirect } from "next/navigation";

const verifyEmailSchema = z.object({
  email: z.string().email().min(1, { message: "Email is required" }),
});

const verifyOtpSchema = z.object({
  otp: z.string().min(1, { message: "OTP is required" }),
});

const ForgotPasswordSchema = verifyEmailSchema.merge(verifyOtpSchema);

type verifyEmailData = z.infer<typeof verifyEmailSchema>;
type verifyOtpData = z.infer<typeof verifyOtpSchema>;

const ForgotPasswordForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setformData] = useState<
    Partial<z.infer<typeof ForgotPasswordSchema>>
  >({});

  const emailForm = useForm<verifyEmailData>({
    resolver: zodResolver(verifyEmailSchema),
    defaultValues: { email: "" },
    mode: "onTouched",
  });

  const otpForm = useForm<verifyOtpData>({
    resolver: zodResolver(verifyOtpSchema),
    defaultValues: { otp: "" },
    mode: "onTouched",
  });

  const submitHandler = async (data: any) => {
    const finalData = { ...formData, ...data };

    console.log(finalData);
    // call the Api to verify the OTP

    redirect("/forgot-password/reset");
  };

  const onNext = async (data: any) => {
    setformData((prev) => ({ ...prev, ...data }));
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <>
      {step === 1 && (
        <Form {...emailForm}>
          <form onSubmit={emailForm.handleSubmit(onNext)} className="space-y-6">
            <FormFieldUi
              form={emailForm}
              name="email"
              label="Email"
              required
              type="email"
              description="We'll send a one-time password (OTP) to this email to verify your password. Please make sure the email address is correct."
            />
            <CustomButton textContext="Verify your email" type="submit" />
          </form>
        </Form>
      )}
      {step === 2 && (
        <Form {...otpForm}>
          <form
            onSubmit={otpForm.handleSubmit(submitHandler)}
            className="space-y-6"
          >
            <FormFieldUi
              form={otpForm}
              name="otp"
              label="OTP codes"
              required
              type="otp"
              description="Please enter the one-time password(OTP) sent to your email."
            />
            <CustomButton textContext="Proceed" type="submit" />
            <div className="text-sm">
              If you didn't receive the OTP, please check your spam folder or{" "}
              <span
                onClick={() => {
                  setStep(1);
                }}
                className="text-blue-500 transition-all hover:text-blue-700 duration-200 cursor-pointer"
              >
                try again
              </span>
            </div>
          </form>
        </Form>
      )}
    </>
  );
};

export default ForgotPasswordForm;
