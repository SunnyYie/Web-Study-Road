import { useState } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined, LikeTwoTone, SyncOutlined, SmileTwoTone, SmileOutlined, DownOutlined, LockOutlined } from '@ant-design/icons'
import { Layout, Menu, Button, Switch, Avatar, Dropdown, Space, Drawer, Form, Input } from 'antd'
import { Outlet, useNavigate } from 'react-router-dom'
import { useMyToken } from '../composables/auth'
import { useBearStore } from '../store'

const { Header, Sider, Content } = Layout

const App = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [load, setLoad] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  const [open, setOpen] = useState(false)
  const { removeToken } = useMyToken()
  const [user, logOut] = useBearStore((state) => [state.user, state.logOut])
  const navigate = useNavigate()
  const showDrawer = () => {
    setOpen(true)
    console.log(user)
  }
  const onClose = () => {
    setOpen(false)
  }
  const items = [
    {
      label: (
        <Button type="text" onClick={showDrawer}>
          修改密码
        </Button>
      ),
      key: '0',
    },
    {
      label: (
        <Button
          type="text"
          onClick={() => {
            removeToken()
            logOut()
            navigate('/login')
          }}
        >
          退出登录
        </Button>
      ),
      key: '1',
    },
  ]
  function changeWid() {
    if (!collapsed) {
      return {
        width: '170px',
        background: '#334454',
        transition: 'width .2s',
      }
    } else {
      return {
        width: '50px',
        background: '#334454',
        transition: 'width .2s',
      }
    }
  }

  return (
    <>
      <Layout className={darkMode ? 'dark' : ''}>
        <Sider trigger={null} collapsible collapsed={collapsed} className=" min-h-screen">
          <div className="  h-10 mt-4 mb-4 m-auto rounded-md flex items-center justify-start" style={changeWid()}>
            <LikeTwoTone className=" ml-4  mr-4" height={'30px'} width={'30px'} />
            {!collapsed && <span className=" text-lime-50">马场郭德纲</span>}
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['2']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'nav 1',
                children: [
                  { key: '4', icon: <UserOutlined />, label: 'nav 4' },
                  { key: '5', icon: <UserOutlined />, label: 'nav 5' },
                  { key: '6', icon: <UserOutlined />, label: 'nav 6' },
                ],
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3',
              },
            ]}
          />
        </Sider>
        <Layout className="dark:bg-slate-800">
          <Header
            style={{
              padding: 0,
            }}
            className=" flex items-center relative bg-white dark:bg-gray-800"
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <Button
              type="text"
              icon={load ? <SyncOutlined spin /> : <SyncOutlined />}
              onClick={() => {
                setLoad(true)
                setTimeout(() => {
                  location.reload()
                  setLoad(false)
                }, 1000)
              }}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <Switch onClick={toggleDarkMode} className=" absolute right-52" checkedChildren={<SmileTwoTone />} unCheckedChildren={<SmileOutlined />}>
              黑夜
            </Switch>
            <Avatar icon={<UserOutlined />} className=" absolute right-32" src={user.avatar} />
            <Dropdown
              menu={{
                items,
              }}
              trigger={['click']}
              className=" absolute right-7 "
            >
              <Button type="link" onClick={() => {}}>
                <Space className="flex items-center">
                  <span>admin</span>
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              marginTop: '70px',
              padding: 24,
              minHeight: 280,
            }}
            className="dark:bg-slate-600 bg-white"
          >
            Content
            <Outlet></Outlet>
          </Content>
        </Layout>
        <Drawer title="修改密码" placement="right" onClose={onClose} open={open}>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
            onFinish={(values) => {
              
            }}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: '请输入密码',
                },
              ]}
            >
              <Input placeholder="UserName" prefix={<UserOutlined className=" opacity-30" />} />
            </Form.Item>

            <Form.Item
              name="oldpassword"
              rules={[
                {
                  required: true,
                  message: '请输入旧密码',
                },
              ]}
            >
              <Input.Password prefix={<LockOutlined className=" opacity-30" />} type="password" placeholder="OldPassword" />
            </Form.Item>
            <Form.Item
              name="newpassword"
              rules={[
                {
                  required: true,
                  message: '请输入新密码',
                },
              ]}
            >
              <Input.Password prefix={<LockOutlined className=" opacity-30" />} type="password" placeholder="NewPassword" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                确认
              </Button>
            </Form.Item>
          </Form>
        </Drawer>
      </Layout>
    </>
  )
}
export default App
