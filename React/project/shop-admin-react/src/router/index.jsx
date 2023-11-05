import App from './App.jsx'
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'

const routes = [
  {
    path: "/",
    component: App
  },
  {
    path: "/child/:id",
    component: Child,
    routes: [
      {
        path: "/child/:id/grand-child",
        component: GrandChild
      }
    ]
  }
];

export default routes;