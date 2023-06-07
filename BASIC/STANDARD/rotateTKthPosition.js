function countingValleys(arr,k) {
    let start_pos=arr.length-k;
  
   for(let i=0;i<k;i++){
    let pos=start_pos+i;
    let key=arr[pos];
    while(pos>i){
      arr[pos]=arr[pos-1];
      pos--;
    }
    arr[i]=key;
   }
    return arr;
  
  }
  
  let arr=[1,2,3,4,5,6,7];
  let k=4;
  
  console.log(countingValleys(arr,k));
  //[5,6,7,1,2,3,4]