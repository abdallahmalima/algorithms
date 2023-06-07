let sort=(arr,start_index)=>{
    if(start_index>=arr.length)  return;
   
    let max_index=start_index;
   for(let i=start_index;i<arr.length;i++){
     if(arr[max_index]>arr[i]){
       max_index=i;
     }
   }
      let temp=arr[max_index];
      arr[max_index]=arr[start_index];
      arr[start_index]=temp;
   
    sort(arr,start_index+1);
   return arr;
   }
   let arr=[7,2,6,9,5,3,1,8,4];
   console.log(sort(arr,0));
   
   