var pushDominoes = function (dominoes) {
    var indexes=[];
    for(var i=0;i<dominoes.length;i++) {
        if (dominoes[i]!=='.') indexes.push(i)
    }

    var result = [...dominoes];

    if (dominoes[indexes[0]] === 'L') fill(result, -1, indexes[0], 'L')

    for (var i = 1; i < indexes.length; i++) {
        var start = indexes[i - 1], end = indexes[i];
        var left = dominoes[start], right = dominoes[end];

        if (left === right) {
            fill(result, start, end, right)
        }
        else if (left === 'R' && right === 'L') {
            var half = Math.trunc((end - start - 1) / 2);
            fill(result, start, start + half + 1, left)
            fill(result, end - half - 1, end, right)
        }
    }

    if (dominoes[indexes.at(-1)] === 'R') fill(result, indexes.at(-1), dominoes.length, 'R')

    return result.join``;
};

var fill = (result, start, end, value) => {
    for (var i = start + 1; i < end; i++) {
        result[i] = value;
    }
}