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

const { Title, Text } = Typography

const Recoil: React.FC = () => {
  const [search] = useSearchParams()
  const length = useRecoilValue(lengthState)
  const [testState, setTestState] = useRecoilState(listsState)
  const [input, setInput] = useState<string>('')

  const add = () => {
    setTestState([input, ...testState])
    setInput('')
  }

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
