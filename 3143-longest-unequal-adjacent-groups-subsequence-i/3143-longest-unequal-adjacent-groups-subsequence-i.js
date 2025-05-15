/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
    let path = [words[0]]; 
    let previous = groups[0];

    for (let i = 1; i < words.length; i++) { 
        if (groups[i] !== previous) { 
            path.push(words[i]);
            previous = groups[i];
        }
    }

    return path;
};