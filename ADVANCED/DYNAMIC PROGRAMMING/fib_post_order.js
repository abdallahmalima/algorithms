function fib(n){

    if(n<=2){
       console.log(n);
       return 1;
    } 
    
    let fibResult=fib(n-1)+fib(n-2);
     
    console.log(n);
     return  fibResult;  
    }