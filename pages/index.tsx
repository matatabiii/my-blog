import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Card from '../components/card'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'タイトル',
      content: '記事内容テキスト記事内容テキスト記事内容テキスト'
    },
    {
      id: 2,
      title: 'Rect×Next.js勉強会',
      content: 'Rect×Next.js勉強会の内容はホゲホゲホゲホゲ'
    },
    {
      id: 3,
      title: 'Astro勉強中',
      content: '静的ジェネレーターAstro'
    }
  ])

  return (
    <Layout>
      {
        posts.length > 0 && (
          posts.map(post => (
            <Card key={post.id} title={post.title} content={post.content}></Card>
          ))
        )
      }
    </Layout>
  )
}

export default Home
