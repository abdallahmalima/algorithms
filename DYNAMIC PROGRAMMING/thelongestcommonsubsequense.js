let  lcs=(str1,str2)=>{
    let table=Array(str1.length+1).fill().map(()=>Array(str2.length+1).fill(0)); 
    for(let r=1;r<=str1.length;r++){
      for(let c=1;c<=str2.length;c++){
          //str index must start at 0 r-1,c-1
          if(str1[r-1]==str2[c-1]){
           table[r][c]=table[r-1][c-1]+1;
          }else{
           table[r][c]=Math.max( table[r][c-1], table[r-1][c]); 			
          }
      }
    }
    console.log(table);
    return table[str1.length][str2.length];
  }
  console.log(lcs("stoneeeee","mimisto"));