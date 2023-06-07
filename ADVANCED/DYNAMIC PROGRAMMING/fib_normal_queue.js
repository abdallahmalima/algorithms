function fib(n){
  
    let stack=[n];
    while(stack.length>0){
     const data=stack.shift();
     console.log(data);
     if(data>2) stack.push(data-1);
     if(data>2) stack.push(data-2);
    }
  
  }
  
  console.log(fib(5));  
    
  
  
  
  
  
  
  
  
  