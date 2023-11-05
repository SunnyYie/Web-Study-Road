// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

var exist = function (board, word) {
  const m = board.length,
    n = board[0].length
  const used = new Array(m) //建立used数组做标记
  for (let i = 0; i < m; i++) {
    used[i] = new Array(n)
  }
  //(row,col)当前遍历点的坐标, i表示当前考察的word字符索引
  const canFind = (row, col, i) => {
    if (i === word.length) {
      //整个字符串都遍历完了
      return true
    }
    if (row < 0 || row >= m || col < 0 || col >= n) {
      //点越界
      return false
    }
    if (used[row][col] || board[row][col] !== word[i]) {
      return false
    }
    used[row][col] = true
    const canFindResult = canFind(row + 1, col, i + 1) || canFind(row - 1, col, i + 1) || canFind(row, col + 1, i + 1) || canFind(row, col - 1, i + 1)
    if (canFindResult) {
      //如果找到了答案，返回true
      return true
    }
    used[row][col] = false
    return false
  }

  // 每个点都可以为起点
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0] && canFind(i, j, 0)) {
        //以点(i,j)为起点，开始搜
        return true
      }
    }
  }
  return false
}
