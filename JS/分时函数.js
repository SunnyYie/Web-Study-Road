// 输入的数组分成块，并在每一帧中执行一部分任务。函数会不断地执行下一块任务，直到数组中的所有任务都完成。

const btn = document.querySelector('.btn')
btn.onclick = () => {
  const taskHandler = (data) => {
    const div = document.createElement('div')
    div.textContent = data
    document.body.appendChild(div)
  }
  performChunk(1000, taskHandler)
}

function performChunk(datas, taskHandler) {
  if (typeof datas === 'number') {
    datas = { length: datas }
  }
  if (datas.length === 0) return
  let i = 0
  // 执行下一块任务
  function run() {
    if (i >= datas.length) return
    // 浏览器一帧中执行的剩余时间
    requestIdleCallback((idle) => {
      while (idle.timeRemaining() > 0 && i < datas.length) {
        // 执行一个任务
        taskHandler(datas[i])
        i++
      }
      run()
    })
  }
  run()
}
