let shortestPath=(graph,src,dst)=>{
    let queue=[[src,0]];
    let max=-Infinity;
    while(queue.length>0){
      let [curr,weight]=queue.shift();
      if(curr==dst) {
        if(max<weight){
          max=weight;
        }
      }
      for(let [neighbour,weightt] of graph[curr]){
        queue.push([neighbour,weight+weightt]);
      }
    }
    
    return max;
    }
    let graph={
    a:[['b',1],['e',1]],
    b:[['c',1]],
    c:[['d',1]],
    d:[],
    e:[['d',1]]
    };
    console.log(shortestPath(graph,'a','d'));