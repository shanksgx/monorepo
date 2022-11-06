/* eslint-disable @typescript-eslint/no-explicit-any */
import { withRouter } from 'next/router'
import { Header } from '@/components'
import { Typography } from '@arco-design/web-react'
const { Title } = Typography

function About({ router }: any) {
  return (
    <>
      <Header title={'hello goduer about'} />
      <Title heading={5}>Welcome to next.js! About {router?.query?.name}</Title>
    </>
  )
}

export default withRouter(About)
