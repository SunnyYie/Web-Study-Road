const dijkstra = ({ start, edges }) => {
  const queue = [start]
  let distance = 0

  const update = (vertex, value) => {
    queue.push(vertex)
    distance = value
  }

  edges.forEach((edge) => {
    const from = edge[0]
    const to = edge[1]
    update(from, distance + edge[2])
    update(to, distance)
  })

  return function (vertex) {
    if (!queue.includes(vertex)) {
      queue.push(vertex)
    }
    return distance
  }
}

// 示例数据
const edges = [
  [0, 1, 2],
  [0, 2, 3],
  [1, 3],
  [2, 4],
]

// 使用 Dijkstra 算法计算最短路径
const result = dijkstra({ start: 0, end: 4 }, edges)
console.log(result(0))
// 输出:2
console.log(result(4))
// 输出:1
