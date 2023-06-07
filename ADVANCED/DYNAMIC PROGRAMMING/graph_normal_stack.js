let graph={
    a:['c','b'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
    };
    
    function depthFirst(graph,src){
      const stack=[src];
      while(stack.length>0){
        const newSrc=stack.pop(); 
        console.log(newSrc);
        for(let curr of graph[newSrc] ){
          stack.push(curr);
        }
      }
    
    }
    depthFirst(graph,'a')