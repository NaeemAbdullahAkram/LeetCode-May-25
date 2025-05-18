 
var kidsWithCandies = function(candies, extraCandies) {
    let res = []
    for(let i=0;i<candies.length;i++){
        let maxCandies = Math.max(...candies)
        candies[i] + extraCandies >= maxCandies ? res.push(true) : res.push(false)
    }
    return res
};