function permutations(elements){
   if(elements.length==0) return [[]];
   
   let allPerms=[];

   let first=elements[0];
   let newElements=elements.slice(1);
   let funcResults=permutations(newElements);
   for(let arr of funcResults){
      for(let i=0;i<=arr.length;i++){
       allPerms.push([...arr.slice(0,i),first,...arr.slice(i)])
      }
   
   }
return   allPerms;  
}

console.log(permutations(['a','b','c']));  









