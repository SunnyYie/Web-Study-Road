var totalFruit = function (fruits) {
  let left = 0,
    max = 0
  let map = new Map()
  let len = fruits.length

  for (let i = 0; i < len; ++i) {
    map.set(fruits[i], (map.get(fruits[i]) || 0) + 1)
    while (map.size > 2) {
      map.set(fruits[left], map.get(fruits[left]) - 1)
      if (map.get(fruits[left]) === 0) {
        map.delete(fruits[left])
      }
      left++
    }
    max = Math.max(max, i - left + 1)
  }
  return max
}
