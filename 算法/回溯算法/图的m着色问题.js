const bfs = ({ graph, start, visited }) => {
  const queue = [start]
  visited[start] = true

  const update = (vertex, value) => {
    queue.push(vertex)
    visited[vertex] = value
  }

  graph.forEach((edge) => {
    const from = edge[0]
    const to = edge[1]
    if (visited[from] || visited[to]) {
      update(from, value + edge[2])
      update(to, value + edge[2])
    }
  })

  return function (vertex) {
    if (!queue.includes(vertex)) {
      queue.push(vertex)
    }
    return value
  }
}

// 示例数据
const graph = [
  [0, 1, 2],
  [0, 2, 3],
  [1, 3],
  [2, 4],
]
const start = 0
const visited = {}

// 使用 BFS 算法查找着色方案
const result = bfs({ graph, start, visited })
console.log(result(start))
// 输出:3
