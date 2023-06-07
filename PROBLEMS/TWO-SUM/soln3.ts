const arr:number[]=[4, 5, 1, 7, 2];
const k:number=3;

const twoSum =(arr:number[],k:number):boolean=>{
    const set:Set<number>=new Set();
    for(let i:number=0;i<arr.length;i++){
     const diff:number=k-arr[i];
     if(set.has(diff)){
        return true
     }else{
        set.add(arr[i])
     }
    }
    return false;
}

console.log(twoSum(arr,k))
//O(n)