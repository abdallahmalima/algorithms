function countingValleys(steps, path) {
    // Write your code here
    let count=0;
    let valley=0;
    
    let x=0;
    for(let i=0;i<steps;i++){
      x=i;
        if(path[i]=="U"){
           count++; 
        }else{
            count--;
           
        }
       
         if(count==0 && path[x]=='U') valley++;
        
    }
    if(count<0) valley++
    
    return valley;
  
  }
  
  let grades=['U','D','D','D','U','D','U','U'];
  
  console.log(countingValleys(8,grades));