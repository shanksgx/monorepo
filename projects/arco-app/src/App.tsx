import React from 'react'
import logo from './logo.svg'
import { Button, Typography } from '@arco-design/web-react'
import { IconSync } from '@arco-design/web-react/icon'
import '@/global.less'

const { Title } = Typography
const mockText =
  'This is an arco ui, monorepos, demo based on react. Based on this, we can develop the PC and H5 projects.The project will add cutting-edge front-end web technology according to personal inspiration.'
const mockTitle = 'Monorepos for React'

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <Title heading={2} type="success">
          {process.env.REACT_APP_ENV}
        </Title>
        <Typography.Title heading={4} ellipsis={{ wrapper: 'span' }}>
          {mockTitle}
        </Typography.Title>
        <Typography.Paragraph
          type="warning"
          ellipsis={{
            rows: 2,
            showTooltip: true,
            expandable: true,
            wrapper: 'span'
          }}
        >
          {mockText}
        </Typography.Paragraph>
        <Button type="primary" disabled icon={<IconSync spin />}>
          hello, arco!
        </Button>
      </header>
    </div>
  )
}

export default App
