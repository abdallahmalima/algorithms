let graph={
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
    };
    
    function depthFirst(graph,src){
      console.log(src);
      for(let curr of graph[src]){
        depthFirst(graph,curr);
      }
    
    }
    depthFirst(graph,'a')