let graph={
    0:['8','1','5'],
    1:['0'],
    5:['0','8'],
    8:['0','5'],
    2:['3','4'],
    3:['2','4'],
    4:['3','2']
   };
 
 
   function maxComponentsCount(graph){
     let max_componet=-Infinity;
     const visited=new Set();
     for(let curr in graph){
       let componet_count=explore(graph,curr,visited)
       if(componet_count>max_componet){
         max_componet=componet_count;
       }
     }
     return max_componet;
   }
 
 
 
   function explore(graph,src,visited){
     if(visited.has(src)) return 0;
      visited.add(src);
      let count=1;
      for(let neighbour of graph[src]){
      count+= explore(graph,neighbour,visited);
       
    }
 
    return count;
   }
   console.log(maxComponentsCount(graph));
 