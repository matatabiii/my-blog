import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

export default function Header({ children }: Props) {
  return (
    <>
      <header>
        <h1>header</h1>
        {children}
      </header>
    </>
  )
}
