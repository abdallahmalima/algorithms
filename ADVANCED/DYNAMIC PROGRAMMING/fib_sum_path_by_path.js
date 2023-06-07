function fib(n){

    if(n<=2) return [[n]];
    
    let allFib=[];
    let fib1=fib(n-1);
    for(let arr of fib1){
       allFib.push([arr.reduce((a, b) => a + b, 0)+n]);
    }
    
    let fib2=fib(n-2);
    for(let arr of fib2){
       allFib.push([arr.reduce((a, b) => a + b, 0)+n]);
    }
    
     return  allFib;  
    }
    
    console.log(fib(5));  
      
    
    
    
    
    
    
    
    
    