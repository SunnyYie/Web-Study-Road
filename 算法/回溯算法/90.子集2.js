// 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

var subsetsWithDup = function (nums) {
  let result = [],
    path = []
  let sortNums = nums.sort((a, b) => {
    //去重需要先对集合排序
    return a - b
  })
  function backtracking(index, nums) {
    result.push([...path])
    if (index > nums.length - 1) {
      //终止条件其实可以不加，因为for循环中要求index小于数组长度，在循环时就不允许越界
      return
    }
    for (let i = index; i < nums.length; i++) {
      // 对同一树层使用过的元素进行跳过
      if (i > index && nums[i] === nums[i - 1]) {
        continue
      }
      path.push(nums[i])
      backtracking(i + 1, nums)
      path.pop()
    }
  }
  backtracking(0, sortNums)
  return result
}
