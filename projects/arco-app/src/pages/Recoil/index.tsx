import React, { useState } from 'react'
import {
  Input,
  Button,
  Space,
  Typography,
  Divider
} from '@arco-design/web-react'
import { useSearchParams } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { listsState, lengthState } from '@/models/useDataTestModel'
import useSWR from 'swr'
import { Api, fetcher } from '@/services/user'

const { Title, Text } = Typography

const Recoil: React.FC = () => {
  const [search] = useSearchParams()
  const length = useRecoilValue(lengthState)
  const [testState, setTestState] = useRecoilState(listsState)
  const [input, setInput] = useState<string>('')
  // 接口请求
  const { data, error } = useSWR({ url: Api.testHome, data: 'test' }, fetcher, {
    suspense: true
  })

  const add = () => {
    setTestState([input, ...testState])
    setInput('')
  }

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  // 渲染数据
  return (
    <>
      <Title heading={5}>{search.get('to')}.</Title>
      <Space>
        <Input
          style={{ width: 350 }}
          allowClear
          placeholder="Please Enter something"
          onChange={(e: string) => setInput(e)}
          value={input}
        />
        <Button type={'primary'} onClick={add}>
          submit
        </Button>
      </Space>
      <Divider
        style={{
          borderBottomWidth: 2,
          borderBottomStyle: 'dotted'
        }}
      />
      <Text bold>
        Data({length}):
        {testState &&
          testState.map((item: string, index: number) => (
            <span key={index}>
              {index !== length - 1 ? `${item},` : `${item}`}
            </span>
          ))}
      </Text>
    </>
  )
}

export default Recoil
