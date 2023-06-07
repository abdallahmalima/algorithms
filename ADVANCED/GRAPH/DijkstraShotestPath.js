class QElement {
	constructor(element, priority)
	{
		this.element = element;
		this.priority = priority;
	}
};

// PriorityQueue class
class PriorityQueue {

	// An array is used to implement priority
	constructor()
	{
		this.items = [];
	}

	// enqueue function to add element
// to the queue as per priority
enqueue(element, priority)
{
	// creating object from queue element
	var qElement = new QElement(element, priority);
	var contain = false;

	// iterating through the entire
	// item array to add element at the
	// correct location of the Queue
	for (var i = 0; i < this.items.length; i++) {
		if (this.items[i].priority > qElement.priority) {
			// Once the correct location is found it is
			// enqueued
			this.items.splice(i, 0, qElement);
			contain = true;
			break;
		}
	}

	// if the element have the highest priority
	// it is added at the end of the queue
	if (!contain) {
		this.items.push(qElement);
	}
}


// dequeue method to remove
// element from the queue
dequeue()
{
	// return the dequeued element
	// and remove it.
	// if the queue is empty
	// returns Underflow
	if (this.isEmpty())
		return "Underflow";
        let a=this.items.shift();
	return [a.element,a.priority];
}


isEmpty()
{
    // return true if the queue is empty.
    return this.items.length == 0;
}

};












let shotestPath=(graph,src,dst,map)=>{

 let priorityQueue = new PriorityQueue();
 priorityQueue.enqueue(src,0);


 while(!priorityQueue.isEmpty()){
    let [newSrc,weight]=priorityQueue.dequeue();
   // console.log([newSrc,weight]);
    if(map[newSrc]>weight){
        map[newSrc]=weight;  
    }
    for(let [neigbourr,weightt] of graph[newSrc] ){
        priorityQueue.enqueue(neigbourr,weightt+weight);
    }
 }

 return map[dst];

}
let graph={
0:[['1',4],['2',1]],
1:[['3',1]],
2:[['1',2],['3',5]],
3:[['4',3]],
4:[]

};
let map={};
map['0']=Infinity;
map['1']=Infinity;
map['2']=Infinity;
map['3']=Infinity;
map['4']=Infinity;
console.log(shotestPath(graph,'0','4',map));



