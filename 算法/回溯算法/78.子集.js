// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

var subsets = function (nums) {
  let result = [],
    path = []
  function backtracking(index) {
    result.push([...path])
    if (index > nums.length) {
      //终止条件可以不加
      return
    }
    for (let i = index; i < nums.length; i++) {
      path.push(nums[i])
      backtracking(i + 1)
      path.pop()
    }
  }
  backtracking(0)
  return result
}
