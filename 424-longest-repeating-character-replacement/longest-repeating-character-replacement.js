/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let l = 0;
    let max_freq = 0;
    let max_window = 0;
    const freq = {}

    for(let r=0;r<s.length;r++){
        freq[s[r]] = (freq[s[r]] || 0) + 1;
        max_freq = Math.max(freq[s[r]],max_freq)

        if(r-l+1 - max_freq > k){
            freq[s[l]] = freq[s[l]] - 1;
            l++;
        }

        max_window = Math.max(max_window,r-l+1)
    }

    return max_window;
};