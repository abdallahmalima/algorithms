function fib(n,memo={}){
    if(n in memo) return memo[n];
    if(n<=1) return n;

    return memo[n]=fib(n-1,memo)+fib(n-2,memo);
}

console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(93));