let graphHasCircle=(graph,src,visited=new Set(),terminated=new Set())=>{
    // console.log(src);
     if(visited.has(src) && ! terminated.has(src)){
       return true;
     }
     visited.add(src);
     for(let neighbour of graph[src]){
       if(graphHasCircle(graph,neighbour,visited,terminated)==true){
           return true;  
       }
     }
     terminated.add(src);
   
   
     return false;
   
   }
   
   let graph={
       a:['b','c'],
       b:['d'],
       c:['e'],
       d:['f'],
       e:[],
       f:[]
       };
   
   console.log(graphHasCircle(graph,'a'));