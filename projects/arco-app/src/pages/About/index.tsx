import React, { useState, useEffect } from 'react'
import { Typography } from '@arco-design/web-react'
import NProgress from 'nprogress'
import { ScrollBar } from 'react-arco-components'
import styled from 'styled-components'

const { Title } = Typography

const About: React.FC = () => {
  const [status, setStatus] = useState<boolean>(false)

  useEffect(() => {
    NProgress.start()
    setStatus(true)
    setTimeout(() => {
      setStatus(false)
      NProgress.done()
    }, 3000)
  }, [])

  return (
    <>
      <Title type="primary" underline>
        about page {status}
      </Title>
      <ScrollBar
        autoHide={true}
        barStyle={barStyle}
        content={
          <ScrollBox>
            <Title type="primary" underline heading={5}>
              This is ScrollBar components...
            </Title>
          </ScrollBox>
        }
      />
    </>
  )
}

const ScrollBox = styled.span`
  width: 510px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const barStyle = {
  width: 500,
  height: 300,
  border: '1px solid #ff9999'
}

export default About
