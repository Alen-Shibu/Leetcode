/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let longestSeq = 0;
    const set = new Set(nums)
    for(let num of set){
        if(!set.has(num - 1)){
            let length = 0;
            while(set.has(num + length)) length++;
            longestSeq = Math.max(longestSeq,length)
        }
    }
    return longestSeq;
};