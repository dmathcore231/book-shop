import { createBrowserRouter } from 'react-router-dom'
import { Main } from './pages/Main'
import { Layout } from './components/Layout'
import { Book } from './pages/Book'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: '/book/:isbn13',
        element: <Book />
      }
    ]
  }
])
