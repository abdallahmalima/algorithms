function fib(n){
    console.log(n);
 if(n<=2){
   
    return 1;
 } 
 
 let fibResult=fib(n-1)+fib(n-2);
 
  return  fibResult;  
 }
 
 fib(5);  
   
 
 
 
 
 
 
 
 
 