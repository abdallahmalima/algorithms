function bestSum(targetSum,elements,memo={}){
   
    if(targetSum in memo) return memo[targetSum];
    if(targetSum==0) return [];
    if(targetSum<0) return null;

   let bestSumResult=null;

    for(let num of elements){
        let newtargetSum=targetSum-num;
        let funcResult=bestSum(newtargetSum,elements,memo);
        if( funcResult!=null){
            if(bestSumResult==null || bestSumResult.length>funcResult.length){
                bestSumResult=[...funcResult,num];
            }
            
        }
    }

    return memo[targetSum]=bestSumResult;
}

console.log(bestSum(3,[4,5,2]));
console.log(bestSum(7,[4,5,2,7,3]));
console.log(bestSum(14,[14,13,3]));
console.log(bestSum(54,[4,5,2]));
console.log(bestSum(193,[4,5,2]));