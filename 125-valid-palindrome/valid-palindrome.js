/**
 * @param {string} s
 * @return {boolean}
 */
 var isAlphaNum = function(ch){
    return /^[a-z0-9]$/i.test(ch)
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

