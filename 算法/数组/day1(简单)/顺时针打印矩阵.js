var spiralOrder = function (matrix) {
  let res = []
  while (matrix.length) {
    res.push(matrix.shift() || [])
    res.push(matrix.map((item) => item.pop() ?? []))
    res.push((matrix.pop() || []).reverse())
    res.push(matrix.map(((item) => item.shift() ?? [])).reverse())
  }
  return res
}
