import { useNavigate } from 'react-router-dom'
import { useMyToken } from '../composables/auth'
import { useBearStore } from '../store'
import { useState } from 'react'
import { Button, Modal } from 'antd'

export default function Home() {
  const navigate = useNavigate()
  const { removeToken } = useMyToken()
  const [user, logOut] = useBearStore((state) => [state.user, state.logOut])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleOk = () => {
    removeToken()
    logOut()
    navigate('/login')
    setIsModalOpen(false)
  }

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setIsModalOpen(true)
        }}
      >
        退出登录
      </Button>
      <Modal
        cancelText={'取消'}
        okText={'确定'}
        title="退出登录"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={() => {
          setIsModalOpen(false)
        }}
      >
        <p>确认要退出登录吗</p>
      </Modal>
    </div>
  )
}
