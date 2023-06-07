function rodCutter(n,rod){
    if(n==0) return 0;
    let max=0;
     for(let i=1;i<=n;i++){
       
     let sum= rod[i]+ rodCutter(n-i,rod);
       if(max<sum){
         max=sum
       }
     }
     return max;
    }
    
   let rod=[0,2,4,7,8];
   console.log(rodCutter(4,rod));
   