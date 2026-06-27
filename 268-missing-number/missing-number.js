/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let expected = 0;
    for(let i=0;i<=nums.length;i++){
        expected += i;
    }

    const actual = nums.reduce((acc,num) => acc+num,0)

    return expected - actual
};