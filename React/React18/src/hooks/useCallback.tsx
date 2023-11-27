import { useCallback } from 'react'

export default function MyCallBack() {
  const change = useCallback(() => {
    console.log(11111)
  }, [])

  return (
    <div>
      <button onClick={change}>输出</button>
    </div>
  )
}
