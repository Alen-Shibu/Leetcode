class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if(len(s) != len(t)):
            return False
        
        s_words = {}
        for char in s:
            s_words[char] = s_words.get(char,0) + 1

        t_words = {}
        for char in t:
            t_words[char] = t_words.get(char,0) + 1

        return s_words == t_words
        
         