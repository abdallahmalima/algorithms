function howManySum(targetSum,elements,memo={}){
   
    if(targetSum in memo) return memo[targetSum];
    if(targetSum==0) return 1;
    if(targetSum<0) return 0;

    let allSum=0;

    for(let num of elements){
        let newtargetSum=targetSum-num;
        allSum+=howManySum(newtargetSum,elements,memo);
    }

    return memo[targetSum]=allSum;
}

console.log(howManySum(3,[4,5,2]));
console.log(howManySum(7,[4,5,2,7,3]));
console.log(howManySum(14,[14,13,2]));
console.log(howManySum(54,[4,5,2]));
console.log(howManySum(193,[4,5,2]));