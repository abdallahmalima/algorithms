let sort=(arr,n)=>{

    if(n<=1) return 1;
    
    for(let i=0;i<n-1;i++){
      if(arr[i]>arr[i+1]){
        let temp=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=temp;
      }
    }
     sort(arr,n-1);
    return arr;
    }
    let arr=[7,2,6,9,5,3,1,8,4];
    console.log(sort(arr,arr.length));
    
    