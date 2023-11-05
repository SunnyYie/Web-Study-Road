// 计算从单个源到所有其他源的最短路径的贪心算法
//假设 源顶点 为A ,

// 这个时候 我们只能 访问到 B 和 C ,

// 即 A => B ， A=>C ,先将 B C对应的最短路径 (已知的) 存入 dist中

// 再找到 dist 中 最短的那一条路线 即 A=>B( 2 ) < A=>C（ 4 ）

// 选择 B 为源顶点 进入 下一次循环

// B只能访问到 C D E

// 这个时候 A => C 的路径 可以描述为 A=>B + B=>C

// 与 原来dist中存放的 A=>C 比较 存取最小的

// 后面的 循环同理 ， 结束后就求出了A 对应的顶点的最短路径

function Dijkstra(graph, src) {
  //dist 用来存储路径值
  //visited  用来存储顶点是否访问
  let dist = []
  let visited = []

  const length = graph.length
  const INF = Number.MAX_SAFE_INTEGER

  //初始化dist 和 visited 列表
  for (let i = 0; i < length; i++) {
    dist[i] = INF
    visited[i] = false
  }

  //选择第一个节点 进入循环
  dist[src] = 0

  let i = 0
  while (i < length - 1) {
    //此时对应节点 已经访问设置 true
    visited[src] = true
    //找到对应节点 的 对应的边集合
    let currentEdges = graph[src]
    //遍历边,更新路径
    for (let i = 0; i < currentEdges.length; i++) {
      if (currentEdges[i] !== 0) {
        //存在边 , 找到最短路径  例如
        //A=>B=>C 最短路径的权
        //为 A=>B 的权(dist[src]) +  B=>C的权(currentEdegs[i]) 和 A=>C(dist[i]) 的权 进行比较
        if (dist[src] + currentEdges[i] < dist[i]) {
          //符合上面条件 更新dist[i] 保证dist[i]是每次探路的最短路径
          dist[i] = currentEdges[i] + dist[src]
        }
      }
    }
    //迪杰斯特拉的核心算法 , 找到最短路径 重新探路.
    //选择最短路径
    let min = INF
    let minIndex = -2
    for (let i = 0; i < dist.length; i++) {
      if (!visited[i] && dist[i] < min) {
        min = dist[i]
        minIndex = i
      }
    }

    //进入下一次循环
    src = minIndex
    i++
  }
  return dist
}

let graph = [
  // A，B，C，D，E，F
  [0, 2, 4, 0, 0, 0], // A
  [0, 0, 2, 4, 0, 0], // B
  [0, 0, 0, 0, 3, 0], // C
  [0, 0, 0, 0, 0, 2], // D
  [0, 0, 0, 3, 0, 2], // E
  [0, 0, 0, 0, 0, 0], // F
]
console.log(Dijkstra(graph, 0))
