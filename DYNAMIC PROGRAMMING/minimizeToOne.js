
const minimizeToOne=(n,memo={})=>{  
   if(n in memo) return memo[n];
   if(n==1) return 0;
   let result;
   result=minimizeToOne(n-1,memo);
   if(n%2==0) result= Math.min(result,minimizeToOne(n/2,memo));
   if(n%3==0) result= Math.min(result,minimizeToOne(n/3,memo));
   
      return memo[n]= 1+result;
   }
   
   console.log(minimizeToOne(6))
   