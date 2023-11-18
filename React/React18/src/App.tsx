import { Dispatch, createContext, useContext, useEffect, useRef, useState } from 'react'
import styles from './index.module.less'
import cls from 'classnames'
import Add from './components/Add'
import { useDispatch, useSelector } from 'react-redux'
import { addToNumber, decrement, fetchList } from './store/modules/counter'

function App() {
  const [type, setType] = useState(false)

  const [msg, setMsg] = useState('')

  const ref = useRef(null)

  const FatherContext = createContext('')

  // 使用store
  const { value, list } = useSelector((state: any) => state.counter)

  // 修改store
  const dispatch = useDispatch()

  // redux处理异步
  useEffect(() => {
    ;(dispatch as Dispatch<any>)?.(fetchList())
  }, [])

  const changeType = () => {
    setType(!type)
    setMsg('123')

    dispatch(decrement())
    // 提交action传参
    dispatch(addToNumber(10))
    console.log(value)

    // 异步
    console.log(list)

    console.log(ref.current)
    console.dir(ref.current)
  }

  function Father(props: { children: any }) {
    return (
      <>
        <div>爷爷组件</div>
        {props.children}
      </>
    )
  }

  function Son(props: { children: any }) {
    return (
      <>
        <h1>父组件</h1>
        {props.children}
      </>
    )
  }

  function Child() {
    const context = useContext(FatherContext)

    return <h2>子组件 msg:{context}</h2>
  }

  return (
    <div>
      <h1>React</h1>
      <h2 className={cls(styles.h2, { [styles.change]: type })}>classname的使用</h2>
      <button onClick={changeType}>切换zhuangt1</button>

      {/* 获取DOM */}
      <input type="text" ref={ref} />

      {/* 插槽 */}
      <Son>
        <Child></Child>
      </Son>

      {/* context上下文 */}
      <FatherContext.Provider value={msg}>
        <Father>
          <Son>
            <Child></Child>
          </Son>
        </Father>
      </FatherContext.Provider>

      <Add></Add>
    </div>
  )
}

export default App
