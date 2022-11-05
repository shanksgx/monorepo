import React, { Suspense } from 'react'
import logo from './logo.svg'
import { Typography, Spin } from '@arco-design/web-react'
import { HashRouter, useRoutes } from 'react-router-dom'
// import { createBrowserHistory } from 'history'
import routes from '@/router/routes'
import { RecoilRoot } from 'recoil'
import { SWRConfig } from 'swr'
import styled from 'styled-components'
import '@/global.less'

const RouterConfig = () => useRoutes(routes)
// const history = createBrowserHistory()
const { Title } = Typography
const mockText =
  'This is an arco ui, monorepos, demo based on react. Based on this, we can develop the PC and H5 projects.The project will add cutting-edge front-end web technology according to personal inspiration.'
const mockTitle = 'Monorepos for React'

const App: React.FC = () => {
  return (
    <SWRConfig
      value={{
        onError: (error, key) => {
          console.log('error:', key, error)
          if (error.status !== 403 && error.status !== 404) {
            console.error(error)
            // 我们可以把错误发送给 Sentry，
            // 或显示一个通知 UI。
          }
        },
        onErrorRetry: (error, key, _, revalidate, { retryCount }) => {
          console.log(retryCount)
          // 404 时不重试。
          if (error.status === 404) return

          // 特定的 key 时不重试。
          if (key === '/api/user') return

          // 最多重试 10 次。
          if (retryCount >= 3) return

          // 5秒后重试。
          // setTimeout(() => revalidate({ retryCount: retryCount }), 5000)
        }
      }}
    >
      <Suspense
        fallback={
          <ContentBox>
            <Spin dot />
          </ContentBox>
        }
      >
        <RecoilRoot>
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
              <HashRouter>
                <RouterConfig />
              </HashRouter>
            </header>
          </div>
        </RecoilRoot>
      </Suspense>
    </SWRConfig>
  )
}

const ContentBox = styled.span`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default App
