let stringReverse=(str)=>{

    let strArr=str.split('');
  
    for(let i=0;i<strArr.length/2;i++){
      let temp=strArr[i];
      strArr[i]=strArr[strArr.length-1-i];
      strArr[strArr.length-1-i]=temp;
    }
  
    return strArr.join('');
  }
  
  console.log(stringReverse("hello"));