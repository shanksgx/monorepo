import type { AppProps } from 'next/app'
import '@/styles/global.less'

export default function MyApp({ pageProps, Component }: AppProps) {
  return (
    <>
      <Component {...pageProps} suppressHydrationWarning />
    </>
  )
}
