// import axios from 'axios'

type Idata = {
  url: string
  data: string
}

export enum Api {
  testHome = '/api-kernel-portal/api/open/portal/nav/solution/list'
}

export const fetcher = async ({ url, data }: Idata) => {
  console.log('test:', url, data)
  // const res = await axios.get(url)
  // console.log(res)
  // if (res.data.code !== '0000') {
  //   const error = {
  //     info: res.data.msg,
  //     code: res.data.code
  //   }
  //   console.error('error:', error)
  //   throw error
  // }
  // return res.data

  return true
}
