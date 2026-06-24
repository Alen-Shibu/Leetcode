/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  pref = 1;
  suff = 1;
  let answer = []

  for(const num of nums){
    answer.push(pref)
    pref *= num
  }  

  for(let i=nums.length-1;i>=0;i--){
    answer[i] *= suff;
    suff *= nums[i]
  }

  return answer;
};