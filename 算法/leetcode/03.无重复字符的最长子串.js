var lengthOfLongestsubString = function (s) {
  const set = new Set()
  let i = 0,
    j = 0,
    maxlength = 0
  if (s.length === 0) {
    return 0
  }
  for (i; i < s.length; i++) {
    //如果不存在，则加到set中
    if (!set.has(s[i])) {
      set.add(s[i])
      maxlength = Math.max(maxlength, set.size)
    }
    //如果存在，则删除set中的值，直到没有重复值，添加新的重复值
    else {
      while (set.has(s[i])) {
        set.delete(s[j])
        j++
      }
      set.add(s[i])
    }
  }
  return maxlength
}
