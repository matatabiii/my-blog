import Link from 'next/link'
import { ReactNode } from 'react'
import styles from '../styles/components/card.module.scss'
type Props = {
  children?: ReactNode
  title: string
  content: string
}

export default function Card({ children, title, content }: Props) {
  return (
    <article className={styles.post}>
      <Link href={`/`}>
        <a className={styles.post__inner}>
          <h2 className={styles.post__title}>{title}</h2>
          <div className={styles.post__text}>
            <p>{content}</p>
          </div>
        </a>
      </Link>
    </article>
  )
}
