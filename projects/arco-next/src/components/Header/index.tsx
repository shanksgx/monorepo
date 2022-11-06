import Head from 'next/head'

interface Iheader {
  title: string
  description?: string
}

export default function Header({ title, description }: Iheader) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
    </Head>
  )
}
