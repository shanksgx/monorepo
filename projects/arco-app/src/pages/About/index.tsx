import React, { useState, useEffect } from 'react'
import { Typography } from '@arco-design/web-react'
import NProgress from 'nprogress'

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
    </>
  )
}

export default About
