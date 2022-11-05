import React from "react";
import { Button, type ButtonProps } from "@arco-design/web-react";
import { IconSync } from "@arco-design/web-react/icon";

interface ICustomButton extends ButtonProps {
  text: string;
  customloading?: number;
}

const CustomButton: React.FC<ICustomButton> = (props) => {
  return (
    <Button
      icon={props.customloading === 1 ? <IconSync spin /> : props.icon}
      disabled={props.disabled || props.customloading === 1 ? true : false}
      {...props}
    >
      {props.text}
    </Button>
  );
};

export default CustomButton;
