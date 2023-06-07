function Sum(targetSum,elements,memo={}){
   
    if(targetSum in memo) return memo[targetSum];
    if(targetSum==0) return true;
    if(targetSum<0) return false;

    for(let num of elements){
        let newtargetSum=targetSum-num;
        if(canSum(newtargetSum,elements,memo)==true){
          return   memo[targetSum]=true; 
        }
    }

    return memo[targetSum]=false;
}

console.log(canSum(3,[4,5,2]));
// console.log(canSum(7,[4,5,6]));
// console.log(canSum(14,[4,5,2]));
// console.log(canSum(54,[4,5,2]));
// console.log(canSum(193,[4,5,2]));