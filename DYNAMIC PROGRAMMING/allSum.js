function allSum(targetSum,elements,memo={}){
   
    if(targetSum in memo) return memo[targetSum];
    if(targetSum==0) return [[]];
    if(targetSum<0) return null;

   let allSumResult=[];

    for(let num of elements){
        let newtargetSum=targetSum-num;
        let funcResult=allSum(newtargetSum,elements,memo);
        if( funcResult!=null){
               for(let arr of funcResult){
                allSumResult.push([...arr,num]);
               } 
            
        }
    }

    return memo[targetSum]=allSumResult;
}

console.log(allSum(18,[2,4]));
// console.log(allSum(7,[4,5,2,7,3]));
// console.log(allSum(14,[14,13,3]));
// console.log(allSum(34,[4,5,2]));
// console.log(allSum(33,[4,5,2]));