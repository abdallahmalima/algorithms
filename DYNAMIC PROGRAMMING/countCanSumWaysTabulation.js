const countCanSum=(targetSum,elements)=>{
    let table=Array(targetSum+1).fill(0);
      for(let num of elements){
        table[num]=1;
      }
      for(let i=1;i<=targetSum;i++){
        for(let num of elements){
          if((num+i)<=targetSum)table[num+i]+=table[i];
        }
      }
    
    return table[targetSum];
    }
    
    console.log(countCanSum(7,[3,4,7]));