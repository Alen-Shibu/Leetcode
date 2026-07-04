/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let l = 0;
    let r = numbers.length - 1;

    while(l<r){
        const num = numbers[l] + numbers[r];
        if(num<target) l++
        else if(num>target) r--
        else{
            return [l+1,r+1]
        }
    }
};