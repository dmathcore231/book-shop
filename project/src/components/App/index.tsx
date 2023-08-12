import { RouterProvider } from 'react-router-dom'
import { router } from '../../router'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import './styles.scss'

export function App() {
  console.log('App')
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}
