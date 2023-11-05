// （1）访问顶点v； （2）依次从v的未被访问的邻接点出发，对图进行深度优先遍历；直至图中和v有路径相通的顶点都被访问； （3）若此时图中尚有顶点未被访问，则从一个未被访问的顶点出发，重新进行深度优先遍历，直到图中所有顶点均被访问过为止。

let depth2 = (node) => {
  let stack = []
  let nodes = []
  if (node) {
    stack.push(node)
    while (stack.length) {
      let item = stack.pop()
      let children = item.children || []
      nodes.push(item)
      for (let i = children.length - 1; i >= 0; i--) {
        stack.push(children[i])
      }
    }
  }
  console.log(nodes)
  return nodes
}

obj = [{ children: [0, 1, 2, 3] }, { index: 0, children: [1] }, { index: 4 }, { index: 5, children: [1] }, { index: 1, children: [1, 2, 5] }]

depth2(obj)
