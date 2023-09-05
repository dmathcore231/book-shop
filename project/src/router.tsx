import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Main } from './pages/Main'
import { Layout } from './components/Layout'
import { Book } from './pages/Book'
import { Authorization } from './pages/Authorization'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Search } from './pages/Search'
import { Cart } from './pages/Cart'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to='pages/1' replace={true} />
      },
      {
        path: 'pages/:pageNumber',
        element: <Main />
      },
      {
        path: '/book/:isbn13',
        element: <Book />
      },
      {
        element: <Authorization />,
        children: [
          {
            path: '/authorization/sign_in',
            element: <SignIn />
          },
          {
            path: '/authorization/sign_up',
            element: <SignUp />
          }
        ]
      },
      {
        path: '/search/:searchQuery',
        element: <Search />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ]
  }
])
