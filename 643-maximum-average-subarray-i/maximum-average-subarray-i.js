/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let l = 0;
    let max_avg = -Infinity;
    for(let r = k;r<nums.length+1;r++){
        let sum = 0;
        for(let i = l;i<r;i++){
            sum += nums[i]
        }
        const avg = sum/k
        max_avg = Math.max(avg,max_avg)
        l++;
    }
    return max_avg;
};