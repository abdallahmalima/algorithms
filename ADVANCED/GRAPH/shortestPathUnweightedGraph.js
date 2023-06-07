let shortestPath=(graph,src,dst)=>{
    let queue=[[src,0]];
    while(queue.length>0){
      let [curr,weight]=queue.shift();
      if(curr==dst) return weight; 
      for(let [neighbour,weightt] of graph[curr]){
        queue.push([neighbour,weight+weightt]);
      }
    }
    
    return -1;
    }
    let graph={
    a:[['b',1],['e',1]],
    b:[['c',1]],
    c:[['d',1]],
    d:[],
    e:[['d',1]]
    };
    console.log(shortestPath(graph,'a','d'));