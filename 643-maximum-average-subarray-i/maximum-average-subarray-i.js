/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0;

    for(let i=0;i<k;i++) sum+= nums[i];

    let max_sum = sum;

    for(let i=k;i<nums.length;i++){
        sum += nums[i] - nums[i-k];
        max_sum = Math.max(sum,max_sum)
    }    

    return max_sum/k;
};