import React from "react"
import { Scrollbars } from 'rc-scrollbars'
import { Button, Typography } from '@arco-design/web-react'

const { Title } = Typography

const ScrolBar: React.FC = () => {
  return (
    <Scrollbars
      autoHide
      style={{
        width: 500,
        height: 300,
        border: "1px solid #e8e8e8"
      }}
    >
      <div
        style={{
          width: '510px',
          height: '350px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Title type="primary" underline heading={5}>This is ScrollBar components...</Title>
      </div>
    </Scrollbars>
  )
}

export default ScrolBar
