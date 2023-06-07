let stringReverse=(str)=>{
    let reversedArray='';
    for(let ch of str){
      reversedArray=ch+reversedArray;
    } 
    return reversedArray;
  }
  
  console.log(stringReverse("hello"));