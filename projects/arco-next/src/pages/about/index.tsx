import { Header } from '@/components'
import { Typography } from '@arco-design/web-react'
const { Title } = Typography

export default function About() {
  return (
    <>
      <Header title={'hello goduer about'} />
      <Title heading={5}>Welcome to next.js! About</Title>
    </>
  )
}
