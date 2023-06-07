function canSum(targetSum,elements,values,memo={}){
    if(targetSum in memo) return memo[targetSum];
    if(targetSum==0) return 0;
    if(targetSum<0) return -1;
     let max=0;
    for(let el of elements){
       let res=canSum(targetSum-el,elements,values,memo)
       if(res>=0){
        let sum=values[el]+res;
         if(max<sum){
          max=sum;
         }
       }else{
         return 0;
       }
    }
  
    return memo[targetSum]=max;
  
  }
  let values={2:500,4:600,5:700};
  console.log(canSum(7,[2,4,5],values));
  