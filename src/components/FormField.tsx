import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import ForgotPassword from "./ForgotPassword";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ui/input-otp";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Textarea } from "./ui/textarea";
import { FileDropzone } from "./FileDropzone";

interface FormFieldProps {
  form: UseFormReturn<any>;
  name: string;
  label?: string;
  type: string;
  forgotPassword?: boolean;
  description?: string;
  required?: boolean;
  placeholder?: string;
}

interface InputProps {
  field: any;
  FieldProps: FormFieldProps;
}

const RenderInput = ({ field, FieldProps }: InputProps) => {
  switch (FieldProps.type) {
    case "text":
      return (
        <FormItem className="w-full">
          {FieldProps.label && (
            <FormLabel className=" font-normal w-full text-[#474747]">
              {FieldProps.label}
              {FieldProps.required && <span className="text-red-500">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <Input
              {...field}
              className="bg-white text-sm p-2 h-11 !shadow-none border rounded border-slate-300  focus-visible:ring-1 focus-visible:ring-blue-400 "
              type={"text"}
              placeholder={FieldProps.placeholder ? FieldProps.placeholder : ""}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      );
    case "password":
      return (
        <FormItem>
          <div className="flex justify-between">
            {FieldProps.label && (
              <FormLabel className=" font-normal text-[#474747]">
                {FieldProps.label}
                {FieldProps.required && <span className="text-red-500">*</span>}
              </FormLabel>
            )}
            {FieldProps.forgotPassword && <ForgotPassword />}
          </div>
          <FormControl>
            <div className="space-y-2">
              <Input
                {...field}
                className="bg-white p-2 h-11 !shadow-none border border-slate-300 rounded  focus-visible:ring-1 focus-visible:ring-blue-400 "
                type={"password"}
                placeholder={
                  FieldProps.placeholder ? FieldProps.placeholder : ""
                }
              />
              {FieldProps.description && (
                <p className="text-[13px] text-[#5c5c5c]">
                  {FieldProps.description}
                </p>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      );
    case "email":
      return (
        <FormItem className="w-full">
          <div className="flex justify-between w-full">
            {FieldProps.label && (
              <FormLabel className=" font-normal text-[#474747]">
                {FieldProps.label}
                {FieldProps.required && <span className="text-red-500">*</span>}
              </FormLabel>
            )}
          </div>
          <FormControl>
            <div className="space-y-2">
              <Input
                {...field}
                className="bg-white text-sm p-2 h-11 !shadow-none border border-slate-300 rounded  focus-visible:ring-1 focus-visible:ring-blue-400 "
                type={"email"}
                placeholder={
                  FieldProps.placeholder ? FieldProps.placeholder : ""
                }
              />
              {FieldProps.description && (
                <p className="text-[13px] text-[#5c5c5c]">
                  {FieldProps.description}
                </p>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      );
    case "otp":
      return (
        <FormItem className="w-full flex flex-col">
          <div className="flex justify-between">
            {FieldProps.label && (
              <FormLabel className=" font-normal text-[#474747]">
                {FieldProps.label}
                {FieldProps.required && <span className="text-red-500">*</span>}
              </FormLabel>
            )}
          </div>
          <FormControl>
            <div className="space-y-2 flex flex-col w-full">
              <InputOTP maxLength={6} {...field}>
                <InputOTPGroup className="flex gap-2 w-full">
                  <InputOTPSlot
                    index={0}
                    className="!rounded-none !shadow-none !ring-0 outline-none border border-slate-300  p-4 h-11 w-full"
                  />
                  <InputOTPSlot
                    index={1}
                    className="!rounded-none shadow-none border !ring-0 border-slate-300  p-4 h-11 w-full focus-visible:ring-1 focus-visible:ring-blue-400"
                  />
                  <InputOTPSlot
                    index={2}
                    className="!rounded-none shadow-none border !ring-0 border-slate-300  p-4 h-11 w-full"
                  />
                  <InputOTPSlot
                    index={3}
                    className="!rounded-none shadow-none border border-slate-300  p-4 h-11 w-full !ring-0"
                  />
                  <InputOTPSlot
                    index={4}
                    className="!rounded-none shadow-none border border-slate-300  p-4 h-11 w-full !ring-0"
                  />
                  <InputOTPSlot
                    index={5}
                    className="!rounded-none shadow-none border border-slate-300  p-4 h-11 w-full !ring-0"
                  />
                </InputOTPGroup>
              </InputOTP>
              {FieldProps.description && (
                <p className="text-[13px] text-[#5c5c5c]">
                  {FieldProps.description}
                </p>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      );
    case "phone":
      return (
        <FormItem className="w-full flex flex-col">
          <div className="flex justify-between">
            {FieldProps.label && (
              <FormLabel className=" font-normal text-[#474747]">
                {FieldProps.label}
                {FieldProps.required && <span className="text-red-500">*</span>}
              </FormLabel>
            )}
          </div>
          <FormControl>
            <PhoneInput
              placeholder={FieldProps.placeholder ? FieldProps.placeholder : ""}
              {...field}
              defaultCountry="TZ"
              international
              className="bg-white text-sm  h-11 !shadow-none border border-slate-300 rounded  focus-visible:ring-1 focus-visible:ring-blue-400"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      );
    case "textarea":
      return (
        <FormItem className="w-full flex flex-col">
          <div className="flex justify-between">
            {FieldProps.label && (
              <FormLabel className=" font-normal text-[#474747]">
                {FieldProps.label}
                {FieldProps.required && <span className="text-red-500">*</span>}
              </FormLabel>
            )}
          </div>
          <FormControl>
            <Textarea
              placeholder="Tell us a little bit about business"
              className="resize-none bg-white p-2 h-28 text-sm !shadow-none border border-slate-300 rounded  focus-visible:ring-1 focus-visible:ring-blue-400 "
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      );
    case "file":
      return (
        <FormItem className="w-full flex flex-col">
          <div className="flex justify-between">
            {FieldProps.label && (
              <FormLabel className=" font-normal text-[#474747]">
                {FieldProps.label}
                {FieldProps.required && <span className="text-red-500">*</span>}
              </FormLabel>
            )}
          </div>
          <FormControl>
            <FileDropzone
              value={field.value}
              onRemove={() => field.onChange([])}
              onDrop={(files) => field.onChange(files)}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      );

    default:
      return;
  }
};

const FormFieldUi = (props: FormFieldProps) => {
  const { form, name } = props;

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => <RenderInput field={field} FieldProps={props} />}
    />
  );
};

export default FormFieldUi;
