let graph={
    0:['8','1','5'],
    1:['0'],
    5:['0','8'],
    8:['0','5'],
    2:['3','4'],
    3:['2','4'],
    4:['3','2']
   };
 
 
   function componentsCount(graph){
     let count=0;
     const visited=new Set();
     for(let curr in graph){
       if(explore(graph,curr,visited)==true){
         count++;
       }
     }
 
     return count;
   }
 
 
 
   function explore(graph,src,visited){
     if(visited.has(src)) return false;
      visited.add(src);
      for(let neighbour of graph[src]){
       explore(graph,neighbour,visited);
       
    }
 
    return true;
   }
   console.log(componentsCount(graph));
 