import React from "react";
import { Button, type ButtonProps } from "@arco-design/web-react";

interface ICustomButton extends ButtonProps {
  text: string;
  customloading?: number;
  customIcon?: JSX.Element;
}

const CustomButton: React.FC<ICustomButton> = (props) => {
  return (
    <Button
      icon={props.customloading === 1 ? props.customIcon : props.icon}
      disabled={props.disabled || props.customloading === 1 ? true : false}
      {...props}
    >
      {props.text}
    </Button>
  );
};

export default CustomButton;
