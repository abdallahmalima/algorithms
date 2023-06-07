function fib(n){

    if(n<=2) return n;
    
    let fib1=fib(n-1)
    let fib2=fib(n-2);
     
     return  n+fib1+fib2;  
    }
    
    console.log(fib(5));  
      
    
    
    
    
    
    
    
    
    