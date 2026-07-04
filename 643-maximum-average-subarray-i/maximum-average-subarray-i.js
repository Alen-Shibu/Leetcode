/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    if(nums.length===1) return nums[0]
    let max_avg = -Infinity;
    let l = 0;
    let r = k-1;

    while(r<nums.length){
        let sum = 0;
        for(let i=l;i<r+1;i++){
            sum += nums[i] 
        }
        const avg = sum/k;
        max_avg = Math.max(avg,max_avg)
        l++;
        r++;
    }

    return max_avg;
};