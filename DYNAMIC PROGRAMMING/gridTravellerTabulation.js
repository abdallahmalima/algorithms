
const fib=(n,m)=>{
    let table=Array(n+1).fill().map(()=>{
      return Array(m+1).fill(0);
    });
    
    table[1][1]=1;
    for(let down=0;down<=n;down++){
      for(let right=0;right<=m;right++){
        let current=table[down][right];
          if((right+1)<=n) table[down][right+1]+=current;
          if((down+1)<=m) table[down+1][right]+=current;
      }
    }
    
     return table[n][m];
    
    }
    console.log(fib(3,3));
    