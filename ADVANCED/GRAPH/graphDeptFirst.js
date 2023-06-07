let graph={
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
    };
  
    function graphDeptFirst(graph,src){
      console.log(src);
     for(let neighbour of graph[src]){
      graphDeptFirst(graph,neighbour)
     }
    }
    graphDeptFirst(graph,'a');
  