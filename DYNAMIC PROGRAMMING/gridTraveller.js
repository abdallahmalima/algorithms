function ways(n,m,memo={}){
    let key=n+','+m;
    if(key in memo) return memo[key];
    if(n==1 && m==1) return 1;
    if(n==0 || m==0) return 0;

    return memo[key]=ways(n-1,m,memo)+ways(n,m-1,memo);
}

console.log(ways(3,2));
console.log(ways(3,3));
console.log(ways(4,3));
console.log(ways(4,4));
console.log(ways(93,93));