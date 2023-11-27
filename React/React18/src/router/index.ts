import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/login'
import About from '../pages/about'
import App from '../App'
import Add from '../components/Add'

export const router = createBrowserRouter([
  {
    path: '/',
    element: App(),
    children: [
      {
        index: true, // 默认显示二级路由
        path: 'add',
        element: Add(),
      },
    ],
  },
  {
    path: '/login',
    element: Login(),
  },
  {
    path: '/about/:id/:name',
    element: About(),
  },
  {
    path: '*',
  },
])
