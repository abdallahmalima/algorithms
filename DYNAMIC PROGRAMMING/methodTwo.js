let graph=(i,arr)=>{
    if((i+1)>=arr.length) return [[]];
  
    let all=[];
    for(let x=i+1;x<arr.length;x++){
     let res=graph(x,arr)
     for(let el of res){
      all.push([...el,arr[x]])
     }
     
    }
  
    return all;
  }
  
  console.log(graph(-1,[1,2,3,4,5]));