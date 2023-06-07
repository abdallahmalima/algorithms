function ways(n){
    if(n==0) return [[]];
    if(n<0) return null;
    
    let all=[];
    for(let i=1;i<4;i++){
      let way=ways(n-i);
      if(way!=null){
        for(let arr of way){
          all.push([...arr,i]);
        }
      }
    }
    
     return all;
    }
    
    console.log(ways(3));