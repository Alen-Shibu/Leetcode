/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let res = []
    for(let i=0;i<nums.length;i++){
        const idx = Math.abs(nums[i]) - 1
        nums[idx] = -Math.abs(nums[idx])
    }

    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            res.push(i+1)
        }
    }

    return res;
};