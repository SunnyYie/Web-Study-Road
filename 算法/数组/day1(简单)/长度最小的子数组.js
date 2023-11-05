var minSubArrayLen = function(target, nums) {
  let left = 0,right = 0,sum = 0,minlen = Infinity;
  while(right<nums.length){
      sum += nums[right]
      while(sum>=target){
          minlen = Math.min(minlen,right-left+1)
          sum -= nums[left]
          left++
      }
      right++
  }
  return minlen === Infinity?0:minlen

};
