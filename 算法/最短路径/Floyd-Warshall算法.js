// 计算图中所有最短路径的动态规划算法

const floydWarshall = (graph) => {
  const dist = []
  const length = graph.length

  //初始化dist
  for (let i = 0; i < length; i++) {
    dist[i] = []
    for (let j = 0; j < length; j++) {
      if (i === j) {
        dist[i][j] = 0
      } else {
        dist[i][j] = graph[i][j]
      }
    }
  }

  //核心操作  判断 K 是否 是 i 到 j 可能的中点
  for (let k = 0; k < length; k++) {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j]
        }
      }
    }
  }

  return dist
}
