/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    const a1 = new Array(26).fill(0)
    const a2 = new Array(26).fill(0)

    for(let i=0;i<s.length;i++){
        a1[s.charCodeAt(i) - 97]++
        a2[t.charCodeAt(i) - 97]++
    };

    for(let i=0;i<26;i++){
        if(a1[i] !== a2[i]) return false;
    }

    return true
};