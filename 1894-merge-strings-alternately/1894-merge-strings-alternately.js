
var mergeAlternately = function(word1, word2) {
    var maxLength = Math.max(word1.length, word2.length);
    var chars = [];
    for (var i = 0; i < maxLength; i++) {
        if (word1[i])
            chars.push(word1[i]);
        if (word2[i])
            chars.push(word2[i]);
    }
    return chars.join('');
};