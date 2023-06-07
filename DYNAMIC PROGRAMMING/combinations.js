function permutations(elements){
    if(elements.length==0) return [[]];
    
    let combWithFirst=[];
 
    let first=elements[0];
    let newElements=elements.slice(1);
    let combWithoutFirst=permutations(newElements);

    for(let arr of combWithoutFirst){
       combWithFirst.push([...arr,first]);
    
    }
 return   [...combWithoutFirst,...combWithFirst];  
 }
 
 console.log(permutations(['a','b','c']));  
 
 
 
 
 
 
 
 
 
 