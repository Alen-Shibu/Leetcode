/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l = 0;
    let r = 0;
    let max_length = 0;
    let set = new Set()

    let length = 0;
    while(r<s.length){
        if(!set.has(s[r])){
            set.add(s[r])
            r++;
            length++;
        }else{
            while(set.has(s[r])){
                set.delete(s[l])
                l++;
                length--
            }
        }
        max_length = Math.max(length,max_length)
    }

    return max_length;
};