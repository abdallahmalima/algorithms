let sort=(arr)=>{
  if(arr.length==1) return  arr;
  let half=Math.floor(arr.length/2);
  return merge(sort(arr.slice(0,half)),sort(arr.slice(half)));
}

let merge=(A1,A2)=>{
  let arr=[];
  let A1p=0,A2p=0;
  while(A1p<A1.length && A2p<A2.length ){
    if(A1[A1p]<A2[A2p]){
     arr.push(A1[A1p]);
     A1p++;
    }else{
      arr.push(A2[A2p]);
      A2p++;
    }
  }

  for(let i=A1p;i<A1.length;i++){
    arr.push(A1[i])
  }
  for(let i=A2p;i<A2.length;i++){
    arr.push(A2[i])
  }

  return arr;
}


console.log(sort([3,8,5,9,1,4,6,2,7]));