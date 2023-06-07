function allSum(targetSum,elements,memo={}){
   
    if(targetSum in memo) return memo[targetSum];
    if(targetSum==0) return 0;
   
  
  let max=-Infinity;
    for(let [num,value] of elements){
        let newtargetSum=targetSum-num;
        if(newtargetSum>=0){
        let funcResult=allSum(newtargetSum,elements,memo);
      
         let sum= funcResult+value;
         if(max<sum){
          max=sum;
         }
            
              }
    }
  
    return memo[targetSum]=max;
  }
  
   console.log(allSum(8,[[4,7],[5,15],[6,13],[3,6]]));
  