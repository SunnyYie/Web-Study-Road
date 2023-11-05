// 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。

// 回文串 是正着读和反着读都一样的字符串。

const isPalindrome = (s, l, r) => {
  for (let i = l, j = r; i < j; i++, j--) {
    if (s[i] !== s[j]) {
      return false
    }
    return true
  }
}

var partition = function (s) {
  const result = [],
    path = [],
    len = s.length
  backtracking(0)
  return result

  function backtracking(index) {
    // 如果起始位置已经大于s的大小，说明已经找到了一组分割方案了
    if (index >= len) {
      result.push([...path])
      return
    }
    for (let i = index; i < len; i++) {
      if (!isPalindrome(s, index, i)) continue
      path.push(s.slice(index, i + 1))
      backtracking(i + 1)
      path.pop()
    }
  }
}
