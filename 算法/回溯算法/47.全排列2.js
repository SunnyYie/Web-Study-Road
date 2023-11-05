// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

// 输入：nums = [1,1,2]
// 输出：
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]

var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b)
  let result = [],
    path = []
  backtracking([])
  return result

  function backtracking(used) {
    if (path.length === nums.length) {
      result.push([...path])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      // 同一树层：used[i-1]===false表示同一树层被使用了
      // used[i - 1] == true，说明同一树枝nums[i - 1]使用过
      if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) {
        //如果同一树层被使用过，则跳过
        continue
      }
      //同一树枝下
      if (!used[i]) {
        used[i] = true
        path.push(nums[i])
        backtracking(used)
        path.pop()
        used[i] = false
      }
    }
  }
}
