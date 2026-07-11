/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s2.length < s1.length) return false;
    const length = s1.length;

    const actual = new Array(26).fill(0)
    const test = new Array(26).fill(0)

    for(let i=0;i<length;i++){
        actual[s1.charCodeAt(i) - 97]++;
        test[s2.charCodeAt(i) - 97]++;
    }

    const matches = (a,b) => {
        for(let i=0;i<26;i++){
            if(a[i]!==b[i]) return false;
        }
        return true;
    }

    if(matches(actual,test)) return true;

    let l = 0;
    for(let r=length;r<s2.length;r++){
        test[s2.charCodeAt(l) - 97]--;
        test[s2.charCodeAt(r) - 97]++;
        l++;

        if(matches(actual,test)) return true;
    }

    return false;

};