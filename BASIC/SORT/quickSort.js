let sort=(arr)=>{
 
    if(arr.length<=1) return arr;
  
  let pivot=arr[arr.length-1];
  let newArr=arr.slice(0,arr.length-1);
   let arr1=[]
   let arr2=[];
  
   for(let el of newArr){
    if(el>pivot){
      arr2.push(el)
    }else{
      arr1.push(el);
    }
   }
  let left=sort(arr1);
  let right=sort(arr2);
  
  
  return [...left,pivot,...right];
  
  }
  
  console.log(sort([3,8,5,9,1,4,6,2,7]));
