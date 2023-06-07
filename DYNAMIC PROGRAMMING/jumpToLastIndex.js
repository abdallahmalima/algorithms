
const jumpToLastIndex=(arr,i=0)=>{
    if(i==arr.length-1) return true;
    //if(i>arr.length-1) return false;
    let n=i+arr[i];
    for(let x=i+1;x<=n;x++){
      if(jumpToLastIndex(arr,x)==true){
        return true;
      }
    }
  
    return false;
  }
  
  let arr=[3,0,2,0,2,1,4,3];
  console.log(jumpToLastIndex(arr));