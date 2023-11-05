import { Button } from 'antd'
import { Link, Outlet } from 'react-router-dom'
import { useRequest } from 'ahooks'

export default function App() {
  return (
    <>
      <Button type="primary">button</Button>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <hr />
      <Link to="/home">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/login">Login</Link>
      <Outlet></Outlet>
    </>
  )
}
