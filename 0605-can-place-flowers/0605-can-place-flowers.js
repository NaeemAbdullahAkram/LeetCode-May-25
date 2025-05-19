/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let prev=-1;
    let i=0
    let next=1;
    let planted=0

    while(i<flowerbed.length){
        if( flowerbed[prev]!==1 && flowerbed[i]!==1 && flowerbed[next]!==1 ){
            flowerbed[i]=1;
            planted++;
            prev=prev+2;
            i=i+2;
            next=next+2;
        }else{
            prev++;
            i++;
            next++;
        }
    }
    if(planted>=n){
        return true;
    }else{
        return false;
    }
    
};