/**
 * @param {string} s
 * @return {boolean}
 */

 var isAlphaNumeric = function(ch){
    return /^[a-z0-9]$/i.test(ch)
 }
var isPalindrome = function(s) {
    let l=0;
    let r = s.length-1;

    while(l<r){

        while(l<r && !isAlphaNumeric(s[l])){
            l++;
        }

        while(l<r && !isAlphaNumeric(s[r])){
            r--;
        }
        
        if(!(s[l].toLowerCase() === s[r].toLowerCase())){
            return false
        }
        l++;
        r--;
    }

    return true
};