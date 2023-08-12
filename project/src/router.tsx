import { createBrowserRouter } from 'react-router-dom'
import { Books } from './pages/Books'
import { Layout } from './components/Layout'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Books />
      }
    ]
  }
])
