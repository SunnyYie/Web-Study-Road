import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Admin from './layout/admin'
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Error from './routes/404.jsx'
import Login from './routes/login.jsx'
import { useMyToken } from './composables/auth'

const { getToken } = useMyToken()
const token = getToken()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="home" element={<Admin />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="*" element={<Error />} />
        <Route path="app" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
