var twoSum = function (nums, target) {
  //1.创建一个map
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (map.has(complement)) {
      //获取对应key值的索引
      return [map.get(complement), i]
    } else {
      //将nums数组的值作为key，索引作为value
      //因为map.has查找的是key而不是value
      map.set(nums[i], i)
    }
  }
  return []
}

//当搜索到nums数组的7时，得到的complement是2
//通过map.has查找map数组的key中是否含有2
//所以需要将2存在key上，索引0存放在value上
const arr = twoSum([2, 3, 11, 7], 9)
console.log(arr)
