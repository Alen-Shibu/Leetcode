/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const sorted = nums.sort((a,b) => b-a)

    for(let i=1;i<sorted.length;i++){
        if(sorted[i] === sorted[i-1]) return true
    }

    return false;

};