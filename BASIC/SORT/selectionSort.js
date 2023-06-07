let sort=(arr)=>{

    for(let i=0;i<arr.length;i++){
         let min_index=i;
        for(let y=i;y<arr.length;y++){
           if(arr[y]<arr[min_index]){
            min_index=y;
           }
        }
        let temp=arr[i];
        arr[i]=arr[min_index];
        arr[min_index]=temp;
    }

    return arr;
}

console.log(sort([3,8,5,9,1,4,6,2,7]));