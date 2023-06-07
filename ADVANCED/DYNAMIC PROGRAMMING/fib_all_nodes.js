function fib(n){

    if(n<=2) return [[n]];
    
    let allFib=[];
    let fib1=fib(n-1);
    for(let arr of fib1){
       allFib.push([...arr,n]);
    }
    
    let fib2=fib(n-2);
    for(let arr of fib2){
       allFib.push([...arr,n]);
    }
    
     return  allFib;  
    }
    
    console.log(fib(5));  
      
    
    
    
    
    
    
    
    
    