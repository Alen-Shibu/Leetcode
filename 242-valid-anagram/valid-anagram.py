class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if(len(s) != len(t)):
            return False
        
        s_words = {}
        for i in s:
            if i not in s_words:
                s_words[i] = 1
            else:
                s_words[i] += 1 

        t_words = {}
        for i in t:
            if i not in t_words:
                t_words[i] = 1
            else:
                t_words[i] += 1 

        return s_words == t_words
        
         