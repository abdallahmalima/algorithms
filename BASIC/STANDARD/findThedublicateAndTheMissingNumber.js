//return the dublicate and  the missing number
//missing is max_number+1

let func=(nums)=>{
    let a=new Set();
    let res=[];
    let max=-Infinity;
    for(let el of nums){
        if(a.has(el)){
          res.push(el);
        }
        a.add(el);
        if(max<el){
            max=el;
        }
    }
    
    
    res.push(max+1);
    
    return res;
    
    }
    
    console.log(func([1,2,2]));