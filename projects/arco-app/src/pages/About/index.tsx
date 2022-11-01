import React, { useState, useEffect } from 'react'
import { Typography } from '@arco-design/web-react'

const { Title } = Typography

const About: React.FC = () => {
  const [status, setStatus] = useState<boolean>(false)

  useEffect(() => {
    setStatus(true)
    setTimeout(() => {
      setStatus(false)
    }, 3000)
  }, [])

  return (
    <>
      <Title type="primary" underline>
        about page {status}
      </Title>
    </>
  )
}

export default About
