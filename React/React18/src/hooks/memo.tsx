import { memo } from "react"

const MemoSon = memo(function Son() {
  return <div>son</div>
})

export default function MyMemo() {
  return (
    <div>
      <h1>这是父亲</h1>
      {/* memo进行缓存，只有props发生变化时才会重新渲染 */}
      <MemoSon></MemoSon>
    </div>
  )
}
