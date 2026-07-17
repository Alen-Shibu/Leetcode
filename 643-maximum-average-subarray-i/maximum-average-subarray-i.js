/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let l = 0;
    let sum = 0;
    for(let i=0;i<k;i++){
        sum += nums[i]
    };

    let max_avg = sum/k;

    for(let r=k;r<nums.length;r++){
        sum -= nums[l];
        sum += nums[r];
        l++
        max_avg = Math.max(max_avg,sum/k)
    }

    return max_avg;
};