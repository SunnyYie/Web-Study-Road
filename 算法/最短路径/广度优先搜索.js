// BFS，属于一种盲目搜寻法，目的是系统地展开并检查图中的所有节点，以找寻结果。换句话说，它并不考虑结果的可能位置，彻底地搜索整张图，直到找到结果为止。

let breadth = (node) => {
  let nodes = []
  let stack = []
  if (node) {
    stack.push(node)
    while (stack.length) {
      //取第一个
      let item = stack.shift()
      let children = item.children || []
      nodes.push(item)
      for (let i = 0; i < children.length; i++) {
        stack.push(children[i])
      }
    }
  }
  console.log(nodes)
  return nodes
}

obj = [{ children: [0, 1, 2, 3] }, { index: 0, children: [1] }, { index: 4 }, { index: 5, children: [1] }, { index: 1, children: [1, 2, 5] }]
breadth(obj)
