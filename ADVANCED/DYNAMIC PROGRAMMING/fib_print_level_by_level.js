function fib(n){
  
    let all=[];
   let stack=[n];
   while(stack.length>0){
    const len=stack.length;
   let arr=[];
   for(let i=0;i<len;i++){
    const data=stack.shift();
    arr.push(data);
    if(data>2) stack.push(data-1);
    if(data>2) stack.push(data-2);
   }
   all.push(arr.reduce((a, b) => a + b, 0));
   }
 
   return all;
 }
 
 console.log(fib(5));  
   
 
 
 
 
 
 
 
 
 