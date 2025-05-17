var sortColors = function(nums) {
     const obj={a:0,b:0,c:0}
     for(let i=0;i<nums.length;i++){
        if(nums[i]===0){
            obj.a=obj.a+1;
        }else if(nums[i]===1){
            obj.b=obj.b+1;
        }else{
            obj.c=obj.c+1;
        }
     }
    let index=0;
    for(let i=0;i<obj.a;i++){
        nums[index]=0;
        index++;
    }
        for(let i=0;i<obj.b;i++){
        nums[index]=1;
        index++;
    }
    for(let i=0;i<obj.c;i++){
        nums[index]=2;
        index++;
    }
};