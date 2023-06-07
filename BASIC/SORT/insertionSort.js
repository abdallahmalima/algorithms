let insertionSort=(arr)=>{
  let p=0;
  for(let i=1;i<arr.length;i++){
    let key=arr[i];
    let y=i-1;
    while(y>0 && arr[y]>key){
      arr[y+1]=arr[y];
      y--;
    }
    arr[y+1]=key;
    
  }
  return arr;
}

console.log(insertionSort([1,3,7,5,2,6,4]));