let graph={
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
    };
  
    function countNode(graph,src){
      let count=1;
     for(let neighbour of graph[src]){
      count+=countNode(graph,neighbour);
        
     }
  
     return count;
    }
    console.log(countNode(graph,'a'));
  