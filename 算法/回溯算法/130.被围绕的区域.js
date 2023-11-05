// 给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' ，找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。
//被围绕的区间不会存在于边界，边界上的任何o都不会被填充为x

var solve = function (board) {
  const m = board.length,
    n = board[0].length
  const dfs = (i, j) => {
    if (i < 0 || i == m || j < 0 || j == n) return
    if (board[i][j] == 'O') {
      //遇到O
      //将与边缘o相连的o变为no
      board[i][j] = 'NO' //染色为NO
      dfs(i + 1, j)
      dfs(i - 1, j)
      dfs(i, j + 1)
      dfs(i, j - 1)
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 || i == m - 1 || j == 0 || j == n - 1) {
        // 位于边缘的O
        //将边缘的o变为no
        if (board[i][j] == 'O') dfs(i, j)
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      //将所有no变为o，所有o变为x
      if (board[i][j] == 'NO') board[i][j] = 'O'
      else if (board[i][j] == 'O') board[i][j] = 'X'
    }
  }
}
