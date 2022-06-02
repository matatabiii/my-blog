import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/card'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout>
      <Card title={'タイトル'} content={'記事内容テキスト記事内容テキスト記事内容テキスト'}></Card>
    </Layout>
  )
}

export default Home
