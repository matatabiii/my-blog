import { ReactNode } from 'react'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import Main from './main'

type Props = {
  children?: ReactNode
  home?: Boolean
}

export default function Layout({ children, home }: Props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>ヘッダー</Header>

      <Main>{children}</Main>

      <Footer>フッター</Footer>
    </>
  )
}