let graph={
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
    };
  
    function hasPath(graph,src,dst){
      if(src==dst) return true;
     for(let neighbour of graph[src]){
        if(hasPath(graph,neighbour,dst)==true){
          return true;
        }
     }
  
     return false;
    }
    console.log(hasPath(graph,'c','e'));
  