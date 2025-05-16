/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getWordsInLongestSubsequence = function(words, groups) {
    const n = words.length;
    const dp = new Array(n).fill(1);
    const prev = new Array(n).fill(-1);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (groups[i] !== groups[j] && words[i].length === words[j].length) {
                if (hammingDistance(words[i], words[j]) === 1) {
                    if (dp[j] + 1 > dp[i]) {
                        dp[i] = dp[j] + 1;
                        prev[i] = j;
                    }
                }
            }
        }
    }

    const maxLen = Math.max(...dp);
    const maxIndex = dp.indexOf(maxLen);

    const subsequenceIndices = [];
    let current = maxIndex;
    while (current !== -1) {
        subsequenceIndices.push(current);
        current = prev[current];
    }
    subsequenceIndices.reverse();

    return subsequenceIndices.map(i => words[i]);
};

function hammingDistance(s1, s2) {
    let distance = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            distance++;
        }
    }
    return distance;
}