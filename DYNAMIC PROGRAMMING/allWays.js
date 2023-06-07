function ways(n,memo={}){
    if(n in memo) return memo[n];
    if(n==0) return [[]];
    if(n<0) return null;

    let allWaysResults=[];
    for(let i=1;i<=3;i++){
        let funcResult=ways(n-i,memo);
        if(funcResult!=null){
            for(let arr of funcResult){
                allWaysResults.push([...arr,i]);
            }  
        }
         
    }

    return memo[n]=allWaysResults;
}

console.log(ways(1));
console.log(ways(2));
console.log(ways(3));
console.log(ways(4));
console.log(ways(13));