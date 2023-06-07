const countCanSum=(targetSum,elements)=>{
    let table=Array(targetSum+1).fill(null);
     table[0]=[];
    for(let num of elements){
      table[num]=[num];
    }
    for(let i=1;i<=targetSum;i++){
      for(let num of elements){
        if((num+i)<=targetSum && table[i]!=null){
          if(table[num+i]!=true)table[num+i]=[...table[i],num];
        };
      }
    }
  
  return table[targetSum];
  
  }
  
  console.log(countCanSum(7,[8,2,5]));