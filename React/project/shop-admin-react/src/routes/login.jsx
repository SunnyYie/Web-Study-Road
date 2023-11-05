import { Col, Row, Form, Input, Button, message } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
import { login, getinfo } from '../api/manager.js'
import { useNavigate } from 'react-router-dom'
import { useMyToken } from '../composables/auth.jsx'
import { useBearStore } from '../store/index.jsx'

const SubmitButton = ({ form, loading }) => {
  const [submittable, setSubmittable] = useState(false)
  const [messageApi, contextHolder] = message.useMessage()

  const values = Form.useWatch([], form)
  useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(
        () => {
          setSubmittable(true)
        },
        () => {
          setSubmittable(false)
        },
      )
  }, [values])
  return (
    <>
      {contextHolder}
      <Button
        type="primary"
        htmlType="submit"
        disabled={!submittable}
        style={{ width: '250px' }}
        loading={loading}
        onClick={() => {
          if (form.getFieldsValue().username == 'admin' && form.getFieldsValue().password == 'admin') {
            messageApi.open({
              type: 'success',
              content: '登陆成功',
            })
          } else {
            messageApi.open({
              type: 'error',
              content: '用户名或密码错误',
            })
          }
        }}
      >
        登录
      </Button>
    </>
  )
}

export default function Login() {
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const { setToken } = useMyToken()
  const [user, setUser] = useBearStore((state) => [state.user, state.setUser])

  return (
    <Row className=" bg-indigo-500 min-h-screen">
      <Col lg={16} md={12} className=" flex flex-col items-center justify-center">
        <div className=" font-bold text-5xl text-lime-50 mb-4">欢迎光临</div>
        <div className=" text-gray-200 text-sm">React+Vite+Antd+TailWindCSS+React Router+Zustand实战</div>
      </Col>
      <Col lg={8} md={12} className=" flex items-center justify-center bg-lime-50 flex-col">
        <h2 className=" font-bold text-gray-800 text-3xl">欢迎回来</h2>
        <div className=" flex items-center justify-center my-5 text-gray-300 space-x-2">
          <span className=" w-16 bg-gray-200" style={{ height: '1px' }}></span>
          <span>账号密码登录</span>
          <span className=" w-16 bg-gray-200" style={{ height: '1px' }}></span>
        </div>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          style={{ width: '250px' }}
          autoComplete="off"
          form={form}
          onFinish={(values) => {
            setLoading(true)
            login(values.username, values.password)
              .then((res) => {
                navigate('/home')
                setToken(res.data.data.token)
                getinfo().then((result) => {
                  setUser(result.data.data)
                })
              })
              .finally(() => {
                setLoading(false)
              })
          }}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          >
            <Input placeholder="Username" prefix={<UserOutlined className=" opacity-30" />} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码!',
              },
            ]}
          >
            <Input.Password prefix={<LockOutlined className=" opacity-30" />} type="password" placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <SubmitButton form={form} loading={loading} />
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}
