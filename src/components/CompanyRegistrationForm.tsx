"use client";

import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import FormFieldUi from "./FormField";
import CustomButton from "./CustomButton";
import { useState } from "react";

const CompanySchema = z.object({
  businessEmail: z.string().email().optional(),
  businessName: z.string().min(1, { message: "Business name is required" }),
  businessPhone: z.string().min(1, { message: "Business phone is required" }),
  companyOverview: z.string().optional(),
  logo: z
    .array(
      z.instanceof(File).refine((file) => file.size < 5 * 1024 * 1024, {
        message: "File must be less than 5MB",
      })
    )
    .optional(),
});

const CompanyRegistrationForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  console.log(isLoading);
  const form = useForm({
    resolver: zodResolver(CompanySchema),
    defaultValues: {
      businessEmail: "",
      businessName: "",
      businessPhone: "",
      companyOverview: "",
      logo: [],
    },
  });

  const submitHandler = async (data: any) => {
    setIsLoading(true);
    console.log(isLoading);
    console.log(data);
    // Call your Company registration API here
    setTimeout(() => {
      alert("Company registration successful!");
      setIsLoading(false);
    }, 3000); // Simulating API call delay
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitHandler)}
        className="space-y-6 w-full"
      >
        <div className="flex sm:flex-row flex-col gap-6 w-full">
          <FormFieldUi
            form={form}
            name="businessName"
            label="Business Name"
            type="text"
          />
          <FormFieldUi
            form={form}
            name="businessEmail"
            label="Business Email"
            type="text"
            placeholder="Optional"
          />
        </div>
        <FormFieldUi
          form={form}
          name="businessPhone"
          label="Business Phone"
          type="phone"
          placeholder="+255 765 361 374"
          forgotPassword
        />
        <FormFieldUi
          form={form}
          name="companyOverview"
          label="Overview"
          type="textarea"
          forgotPassword
        />
        <FormFieldUi
          form={form}
          name="logo"
          label="Company Logo"
          type="file"
          forgotPassword
        />
        <CustomButton
          textContext="Continue"
          loading={isLoading}
          type="submit"
        />
      </form>
    </Form>
  );
};

export default CompanyRegistrationForm;
