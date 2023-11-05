// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

// 输入：digits = "23"
// 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]

// 输入：digits = ""
// 输出：[]

// 输入：digits = "2"
// 输出：["a","b","c"]

var letterCombination = function (digits) {
  const k = digits.length
  //存放每个数字对应的字母
  const map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  //k为空
  if (!k) return []
  //k为一个值
  if (k == 1) return map[digits].split('')

  const res = [],
    path = []
  backtracking(digits, k, 0)
  return res

  function backtracking(digits, k, index) {
    if (path.length === k) {
      //通过''把数组中的所有元素放入一个字符串
      res.push(path.join(''))
      return
    }

    //digits[index] 表示当前数字对应的字符串，并且遍历当前字符串
    for (const ch of map[digits[index]]) {
      path.push(ch)
      backtracking(digits, k, index + 1)
      path.pop()
    }
  }
}

console.log(letterCombination('24'))

console.log(letterCombination('5'));
