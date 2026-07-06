/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let l=0;
    let r=0;
    longest = 0

    while(r<s.length){
        if(!set.has(s[r])){
            set.add(s[r]);
            r++;
        }else{
            set.delete(s[l]);
            l++;
        }
        longest = Math.max(longest,r-l)
    }

    return longest;
};