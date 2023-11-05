// 给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

// candidates 中的每个数字在每个组合中只能使用 一次 。

// 注意：解集不能包含重复的组合。



var CombinationSum2 = function (candidates, target) {
  const result = [],
    path = []
  candidates.sort((a, b) => a - b)
  backtracking(0, 0)
  return result

  function backtracking(sum, index) {
    if (sum > target) return
    if (sum === target) {
      result.push([...path])
      return
    }
    for (let i = index; i < candidates.length && sum + candidates[i] <= target; i++) {
      // 对同一树层使用过的元素进行跳过
      if (i > index && candidates[i] === candidates[i - 1]) {
        continue
      }
      path.push(candidates[i])
      sum += candidates[i]
      backtracking(sum, i + 1)
      path.pop()
      sum -= candidates[i]
    }
  }
}

const arr = CombinationSum2([1, 1, 2], 3)
console.log(arr)
