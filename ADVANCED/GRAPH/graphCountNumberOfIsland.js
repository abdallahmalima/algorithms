
let arr=[
    [0,1,0,0,1,1,1,1,0,0],
    [1,1,1,0,0,0,0,1,0,0], 
    [0,1,0,1,0,0,0,1,0,0],
    [0,1,0,1,0,0,0,1,1,1],
    [0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,0,0],
    [0,1,0,0,0,0,0,0,0,0],
  ]
  
  function islandCount(){
   let count =0;
   const visited=new Set();
    for(let r=0;r<arr.length;r++){
      for(let c=0;c<arr[0].length;c++){
      if(expore(arr,r,c,visited)==true){
        count++;
      }
      }
     
    }
  
    return count;
  }
  
  function expore(arr,r,c,visited){
    let inBoundRows=0<=r && r<arr.length;
    let inBoundCols=0<=c && c<arr[0].length;
    if(!inBoundRows|| !inBoundCols) return false;
  
    if(arr[r][c]==0) return false;
  
    let pos= r+','+c;
    if(visited.has(pos)) return false;
       visited.add(pos);
  
       expore(arr,r-1,c,visited);
       expore(arr,r+1,c,visited);
       expore(arr,r,c-1,visited);
       expore(arr,r,c+1,visited);
  
  
       return true;
  
  }
  //islandCount()
  console.log(islandCount())