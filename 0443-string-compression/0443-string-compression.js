
var compress = function(chars) {
    let arr = [];
    let c = chars[0];
    let count = 0;
    let i = 0;
    while(i<chars.length){
        if(chars[i]==c){
            count++;
        }else{
            arr.push(c);
            c=chars[i];
            if(count>1 && count <=9){
                arr.push(count.toString());
            }
            else if(count>9){
                let a = count.toString().split('');
                for(let j=0;j<a.length;j++){
                arr.push(a[j]);
                }
        }
                    count=1;
    }
    i++;
    }

      arr.push(c);
            if(count>1 && count <=9){
                arr.push(count.toString());
            }
            else if(count>9){
                let a = count.toString().split('');
                for(let j=0;j<a.length;j++){
                arr.push(a[j]);
                }
            }
 for (let j = 0; j < arr.length; j++) {
        chars[j] = arr[j]; 
    }   return arr.length;       
};