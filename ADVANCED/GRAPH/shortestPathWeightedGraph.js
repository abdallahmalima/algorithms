let shortestPath=(graph,src,dst)=>{
    let queue=[[src,0]];
    let min=Infinity;
    while(queue.length>0){
      let [curr,weight]=queue.shift();
      if(curr==dst) {
        if(min>weight){
          min=weight;
        }
      }
      for(let [neighbour,weightt] of graph[curr]){
        queue.push([neighbour,weight+weightt]);
      }
    }
    
    return min;
    }
    let graph={
    a:[['b',2],['e',4]],
    b:[['c',7]],
    c:[['d',9]],
    d:[],
    e:[['d',15]]
    };
    console.log(shortestPath(graph,'a','d'));