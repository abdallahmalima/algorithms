let dd=(arr)=>{
    let arr_all=[];

for(let num of arr){
    if (!isNaN(num)) {
       
       arr_all.push(num) 
    }else{
        if(num=="C"){
          arr_all.pop();
        }
        if(num=="D"){
            arr_all.push(Number(arr_all[arr_all.length-1])*2);
        }
        if(num=="+"){
            arr_all.push(Number(arr_all[arr_all.length-1])+Number(arr_all[arr_all.length-2])); 
        }
    }

}
let t=0;
for(let i of arr_all){
    t+=Number(i);
}
return t;
}
console.log(dd(["5","-2","4","C","D","9","+","+"]))