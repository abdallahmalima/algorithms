let sort=(arr)=>{

    for(let i=0;i<arr.length;i++){

        for(let y=0;y<(arr.length-1)-i;y++){
           if(arr[y]>arr[y+1]){
            let temp=arr[y];
            arr[y]=arr[y+1];
            arr[y+1]=temp;
           }
        }
    }

    return arr;
}

console.log(sort([3,8,5,9,1,4,6,2,7]));