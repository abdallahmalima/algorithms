function allPath(n,m,memo={}){
    let key=n+','+m;
    if(key in memo) return memo[key];
    if(n==1 && m==1) return [[]];
    if(n==0 || m==0) return null;

   let allSumResult=[];
   
   
   let funcResult1=allPath(n-1,m,memo);
   if( funcResult1!=null){
          for(let arr of funcResult1){
           allSumResult.push([...arr,key]);
          } 
       
   }

   let funcResult2=allPath(n,m-1,memo);
   if( funcResult2!=null){
          for(let arr of funcResult2){
           allSumResult.push([...arr,key]);
          } 
       
   }


    

    return memo[key]=allSumResult;
}

console.log(allPath(3,0));
console.log(allPath(3,3));
console.log(allPath(10,10));
