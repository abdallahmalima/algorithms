function fib(n){
  
    let max_height_level=1;
   let stack=[n];
   while(stack.length>0){
    const len=stack.length;
   let sum=0;
   for(let i=0;i<len;i++){
    const data=stack.shift();
    sum+=1;
    if(data>2) stack.push(data-1);
    if(data>2) stack.push(data-2);
   }
   if(max_height_level<sum){
    max_height_level=sum;
   }
    
   }
 
   return max_height_level;
 }
 
 console.log(fib(5));  
   
 
 
 
 
 
 
 
 
 