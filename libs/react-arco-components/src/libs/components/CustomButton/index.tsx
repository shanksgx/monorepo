import React from "react"
import { Button, type ButtonProps } from '@arco-design/web-react'
import { IconSync } from '@arco-design/web-react/icon'
import "@arco-design/web-react/dist/css/index.less"

interface ICustomButton extends ButtonProps {
  text: string;
  customLoading?: boolean
}

const CustomButton: React.FC<ICustomButton> = (props) => {
  return (
    <Button
      icon={props.customLoading ? <IconSync spin /> : props.icon}
      disabled={props.disabled || props.customLoading}
      {...props}
    >
      {props.text}
    </Button>
  )
}

export default CustomButton
