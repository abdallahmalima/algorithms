function fib(n){
  
    let max_sum=-Infinity;
   let stack=[n];
   while(stack.length>0){
    const len=stack.length;
   let sum=0;
   for(let i=0;i<len;i++){
    const data=stack.shift();
    sum+=data;
    if(data>2) stack.push(data-1);
    if(data>2) stack.push(data-2);
   }
   if(max_sum<sum){
    max_sum=sum;
   }
    
   }
 
   return max_sum;
 }
 
 console.log(fib(5));  
   
 
 
 
 
 
 
 
 
 