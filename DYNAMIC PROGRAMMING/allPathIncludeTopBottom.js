function gridTraveller(n,m){
    let key=n+','+m;
    if(n==0 || m==0) return null;
    if(n==1 && m==1) return [[key]];
    
    let all=[];
    let cancelLeft=false;
    let cancelRight=false;
    if(n-1==2 && m==2){
      cancelRight=true;
    }
    if(n==2 && m-1==2){
      cancelLeft=true;
    }
    
    let res1;
    if(cancelLeft){
      res1=gridTraveller(0,0);
    }else{
      res1=gridTraveller(n-1,m);
    }
    
    
    if(res1!=null){
      for(let arr of res1){
        all.push([...arr,key])
      }
    }
    
    
    let res2;
    if(cancelRight){
      res2=gridTraveller(0,0);
    }else{
      res2=gridTraveller(n,m-1);
    }
    if(res2!=null){
      for(let arr of res2){
        all.push([...arr,key])
      }
    }
    
    
    return all;
    
    }
    
    console.log(gridTraveller(3,3));