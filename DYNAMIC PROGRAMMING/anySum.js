function anySum(targetSum,elements,memo={}){
   
    if(targetSum in memo) return memo[targetSum];
    if(targetSum==0) return [];
    if(targetSum<0) return null;

   

    for(let num of elements){
        let newtargetSum=targetSum-num;
        let funcResult=anySum(newtargetSum,elements,memo);
        if( funcResult!=null){
          return   memo[targetSum]=[...funcResult,num];
        }
    }

    return memo[targetSum]=null;
}

console.log(anySum(3,[4,5,2]));
console.log(anySum(7,[4,5,2,7,3]));
console.log(anySum(14,[14,13,3]));
console.log(anySum(54,[4,5,2]));
console.log(anySum(193,[4,5,2]));