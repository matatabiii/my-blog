import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

export default function Main({ children }: Props) {
  return (
    <>
      <main>
        <h1>Main</h1>
        {children}
      </main>
    </>
  )
}
