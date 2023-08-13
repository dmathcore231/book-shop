import { createBrowserRouter } from 'react-router-dom'
import { Main } from './pages/Main'
import { Layout } from './components/Layout'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />
      }
    ]
  }
])
