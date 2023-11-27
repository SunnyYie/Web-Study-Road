import { forwardRef, useImperativeHandle, useRef } from 'react'

const MyInput = forwardRef((_props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const open = () => {
    ;(inputRef.current as HTMLInputElement).focus()
    console.log('打开了')
  }

  // 暴露子组件内部的方法
  useImperativeHandle(ref, () => {
    return {
      open,
    }
  })

  return <input type="text" ref={inputRef} />
})

export default function MyRef() {
  const inputRef = useRef<any>(null)
  const show = () => {
    if (inputRef.current !== null) inputRef.current.focus()
    console.log(inputRef.current)
  }

  const handleOpen = () => {
    if (inputRef.current !== null) inputRef.current.open()
  }
  return (
    <div>
      <MyInput ref={inputRef} />
      <button onClick={show}>聚焦</button>

      <button onClick={handleOpen}>内容暴露的方法</button>
    </div>
  )
}
