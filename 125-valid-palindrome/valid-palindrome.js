/**
 * @param {string} s
 * @return {boolean}
 */
 var isAlphaNum = function(ch){
    const code = ch.charCodeAt(0) 
    return (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0)
    || code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)
    || code >= '0'.charCodeAt(0) && code <= '9'.charCodeAt(0))
}

var isPalindrome = function(s) {
    let l = 0;
    let r = s.length-1;

    while(l<r){
        while(l<r && !isAlphaNum(s[l])){
            l++;
        }
        while(l<r && !isAlphaNum(s[r])){
            r--;
        }
        if(s[l].toUpperCase() !== s[r].toUpperCase()) return false;
        l++;
        r--;
    }
    return true;
};

