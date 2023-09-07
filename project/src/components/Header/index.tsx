import { ReactNode } from 'react'

interface HeaderProps {
  children: ReactNode
}

export function Header(props: HeaderProps): JSX.Element {
  return (
    <header className="header container">
      {props.children}
    </header>
  )
}
