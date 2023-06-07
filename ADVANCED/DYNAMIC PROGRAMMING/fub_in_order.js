function fib(n){
    if(n<=1){
       return 1;
    } 
    
    let fib1=fib(n-1);
    console.log(n);
    let fib2=fib(n-2);
    
     return  fib1+fib2;  
    }
    
    fib(5);  
      
    
    
    
    
    
    
    
    
    