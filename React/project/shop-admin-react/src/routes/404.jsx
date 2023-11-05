import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

function Error() {
  let navigate = useNavigate()

  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉,你查找的页面不存在"
      extra={
        <Button
          type="primary"
          onClick={() => {
            navigate('/')
          }}
        >
          返回
        </Button>
      }
    />
  )
}

export default Error
