function longestSeq(input1, input2, n1, n2) {
  let T = []
  for (let i = 0; i < n1; i++) {
    T[i] = []
    for (let j = 0; j < n2; j++) {
      if (j == 0 || i == 0) {
        T[i][j] = 0
        continue
      }
      if (input1[i] == input2[j]) {
        T[i][j] = T[i - 1][j - 1] + 1
      } else {
        T[i][j] = Math.max(T[i - 1][j], T[i][j - 1])
      }
    }
  }
  findValue(input1, input2, n1, n2, T)
  return T
}

function findValue(input1, input2, n1, n2, T) {
  var i = n1 - 1,
    j = n2 - 1
  var res = []
  while (i > 0 && j > 0) {
    if (input1[i] == input2[j]) {
      // 方法可向数组的开头添加一个或更多元素，并返回新的长度。
      res.unshift(input1[i])
      i--
      j--
    } else {
      if (T[i - 1][j] > T[i][j - 1]) {
        // 向上回退
        i--
      } else {
        j--
      }
    }
  }
  console.log(res)
}

// 1.建表
let input1 = ['', 'a', 'c', 'b', 'a', 'd']
let input2 = ['', 'a', 'b', 'c', 'a', 'd', 'f']
let n1 = input1.length
let n2 = input2.length
longestSeq(input1, input2, n1, n2)
