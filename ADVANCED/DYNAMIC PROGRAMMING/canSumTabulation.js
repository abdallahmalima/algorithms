const countCanSum=(targetSum,elements)=>{
    let table=Array(targetSum+1).fill(0);
     table[0]=true;
    for(let num of elements){
      table[num]=true;
    }
    for(let i=1;i<=targetSum;i++){
      for(let num of elements){
        if((num+i)<=targetSum){
          if(table[num+i]!=true)table[num+i]=table[i]
        };
      }
    }
  
  return table[targetSum];
  
  }
  
  console.log(countCanSum(7,[8,4,7]));