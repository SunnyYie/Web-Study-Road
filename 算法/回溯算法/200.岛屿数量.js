// 给你一个由 ‘1’（陆地）和 ‘0’（水）组成的的二维网格，请你计算网格中岛屿的数量。

// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

// 此外，你可以假设该网格的四条边均被水包围。

// 输入：grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// 输出：1

var numIslands = function (grid) {
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++
        check(i, j, grid)
      }
    }
  }

  //遍历所有连接的土地
  function check(i, j, grid) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] == '0') return
    grid[i][j] = '0' //将为 1 的地方变为0
    check(i, j + 1, grid)
    check(i, j - 1, grid)
    check(i + 1, j, grid)
    check(i - 1, j, grid)
  }
  return count
}
