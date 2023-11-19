import { useMemo, useState } from 'react'

export default function MyMemo() {
  const [count1, setCount1] = useState(100)

  function fib(n: number): number {
    if (n < 3) return 1
    return fib(n - 1) + fib(n - 2)
  }

  // 缓存计算
  const result = useMemo(() => {
    return fib(count1)
  }, [count1])

  return (
    <div>
      <h1>MyMemo</h1>
      <button onClick={() => setCount1(100)}>修改</button>
      {result}
    </div>
  )
}
