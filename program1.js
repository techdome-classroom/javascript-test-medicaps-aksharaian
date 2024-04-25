function longestSubstringLength(s) {
    if (s.length === 0) {
        return 0;
    }
    
    let maxLength = 0;
    let start = 0;
    const charIndexMap = {};
    
    for (let end = 0; end < s.length; end++) {
        if (s[end] in charIndexMap) {
            start = Math.max(start, charIndexMap[s[end]] + 1);
        }
        
        charIndexMap[s[end]] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
}
module.exports = { longestSubstring };
