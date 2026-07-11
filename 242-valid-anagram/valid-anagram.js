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

    const i1 = a1.join('#')
    const i2 = a2.join('#')

    return i1 === i2;
};