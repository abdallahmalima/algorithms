//the lack number ...return the lucknumber
//is the lack number if and only if you divide by its repitation you get 1;

let func=(nums)=>{
    let map={};
    for(let el of nums){
        if(el in map){
            map[el]+=1;
        }else{
            map[el]=1;
        }
       
    }
    
    for(el of nums){
        if(el%map[el]==0){
            return el;
        }
    }
    
    return -1;
    
    }
    
    console.log(func([1,1,2,2,2,3,3,3]));