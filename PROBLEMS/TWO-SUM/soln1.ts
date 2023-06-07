const arr:number[]=[4,5,1,7,2];
const k:number=13;

const twoSum=(arr:number[],k:number):boolean=>{
for (let i:number=0;i<arr.length-1;i++){
    for(let j:number=i+1;j<arr.length;j++){
      const sum:number=arr[i]+arr[j];
      if(sum==k) return true
    }
}
return false;
}

console.log(twoSum(arr,k));