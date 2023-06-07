function ways(n,memo={}){
    if(n in memo) return memo[n];
    if(n==0) return 1;
    if(n<0) return 0;

    return memo[n]=ways(n-1,memo)+ways(n-2,memo)+ways(n-3,memo);
}

console.log(ways(1));
console.log(ways(2));
console.log(ways(3));
console.log(ways(4));
console.log(ways(93));