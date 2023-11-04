function animation(duration, from, to, callback) {
  let value = from
  const speed = (to - from) / duration
  const startTime = Date.now()

  function run() {
    const nowTime = Date.now()
    const time = nowTime - startTime

    if (time >= duration) {
      value = to
      callback && callback(value)
      return
    }
    value = from + speed * time
    callback && callback(value)
    // 执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画
    requestAnimationFrame(run)
  }

  run()
}
