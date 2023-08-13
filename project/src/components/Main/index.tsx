import { ReactNode } from 'react'

interface MainProps {
  children: ReactNode
}

export function Main(props: MainProps): JSX.Element {
  return (
    <main className='container pt-5'>
      {props.children}
    </main>
  )
}
