import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  return (
    <div>
      登录页
      {/* 声明式导航 */}
      <Link to={'/about'}>跳转到关于页</Link>
      {/* 编程式导航 */}
      <button onClick={() => navigate('/about?id=100&name=123')}>跳转</button>
      {/* params传参 */}
      <button onClick={() => navigate('/about/1000')}>跳转</button>
    </div>
  )
}
