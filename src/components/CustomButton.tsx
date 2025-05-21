import React from "react";
import { Button } from "./ui/button";

interface CustomButtonProps {
  type: "submit" | "button" | "reset";
  width?: string;
  backgroundColor?: string;
  fontSize?: string;
  textContext: string;
}

const CustomButton = (props: CustomButtonProps) => {
  return (
    <Button
      type={props.type}
      className={`${props.width ? props.width : "w-full"} ${
        props.backgroundColor ? props.backgroundColor : "bg-blue-500"
      } ${
        props.fontSize ? props.fontSize : "text-sm"
      } cursor-pointer h-11 hover:bg-blue-700 transition-all ease-in`}
    >
      {props.textContext}
    </Button>
  );
};

export default CustomButton;
