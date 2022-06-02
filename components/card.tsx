import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  title: string
  content: string
}

const styles = {
  block: {
    display: 'flex',
    background: '#fff',
    borderRadius: '1.6rem',
    padding: '2rem',
    boxShadow: '0px 8px 16px -2px rgba(10,10,10,0.1), 0px 0px 0px 1px rgba(10,10,10,0.05)'
  },
}

export default function Card({ children, title, content }: Props) {
  return (
    <article style={styles.block}>
      <h2>{title}</h2>
      <div>{content}</div>
    </article>
  )
}
