class Solution:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
        count = {}
        for word in strs:
            map = [0] * 26
            for char in word:
                map[ord(char) - ord('a')] += 1
            res = tuple(map)
            if res not in count:
                count[res] = [word]
            else:
                count[res].append(word)
        
        return list(count.values())