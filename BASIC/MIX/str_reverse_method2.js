let stringReverse=(str)=>{
    let reversedArray=[];
    let reversedStr='';
    for(let ch of str){
      reversedArray.push(ch);
    } 
    for(let ch of str){
      reversedStr+= reversedArray.pop();
    } 
    return reversedStr;
  }
  
  console.log(stringReverse("hello"));