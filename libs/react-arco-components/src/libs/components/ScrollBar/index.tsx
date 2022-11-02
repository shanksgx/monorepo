import React from "react"
import { Scrollbars } from 'rc-scrollbars'
import { Typography } from '@arco-design/web-react'
import styled from "styled-components"

const { Title } = Typography

const ScrolBar: React.FC<{ autoHide?: boolean }> = ({ autoHide = false }) => {
  return (
    <Scrollbars
      autoHide={autoHide}
      style={barStyle}
    >
      <ScrollBox>
        <Title type="primary" underline heading={5}>This is ScrollBar components...</Title>
      </ScrollBox>
    </Scrollbars>
  )
}

const ScrollBox = styled.span`
	width: 510px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center
`;
const barStyle = {
  width: 500,
  height: 300,
  border: "1px solid #181818"
}

export default ScrolBar
