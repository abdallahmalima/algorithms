let fib=(n)=>{
const stack=[[n,0]];

while(stack.length>0){
  const data=stack.shift();
  console.log(data[0]+":"+data[1]);
  if(data[0]>2) stack.push([data[0]-1,data[1]+1]);
  if(data[0]>2) stack.push([data[0]-2,data[1]+1]);
}

return ;
}

console.log(fib(5));