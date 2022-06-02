import { ReactNode } from 'react'
import styles from "../styles/components/layout.module.scss";

type Props = {
  children?: ReactNode
}

export default function Header({ children }: Props) {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__heading}>K</h1>
    </header>
  )
}
