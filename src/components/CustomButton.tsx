"use client";
import React from "react";
import { Button } from "./ui/button";
import Loader from "./Loader";

interface CustomButtonProps {
  type: "submit" | "button" | "reset";
  width?: string;
  backgroundColor?: string;
  fontSize?: string;
  textContext: string;
  loading?: boolean;
}

const CustomButton = (props: CustomButtonProps) => {
  console.log(props.loading);
  return (
    <Button
      type={props.type}
      disabled={props.loading}
      className={`${props.width ? props.width : "w-full"} ${
        props.backgroundColor ? props.backgroundColor : "bg-blue-500"
      } ${
        props.fontSize ? props.fontSize : "text-sm"
      } cursor-pointer h-11 hover:bg-blue-700 transition-all ease-in ${
        props.loading ? "opacity-50 cursor-not-allowed " : ""
      }`}
    >
      {props.loading ? <Loader /> : null}
      {props.textContext}
    </Button>
  );
};

export default CustomButton;
