function allConstruct(target,wordBank,memo={}){
    if(target in memo)  return memo[target];
    if(target=='') return [[]];
   
    let joinedConstruct=[];
    for(let word of wordBank){
     if(target.indexOf(word)==0){
       let suffix=target.slice(word.length);
       let allConstructs=allConstruct(suffix,wordBank,memo)
       for(let arr of allConstructs){
          joinedConstruct.push([...arr,word]);
       }
        
     }
    }
   
    return memo[target]=joinedConstruct.length>0?joinedConstruct:null;
   }
   console.log(allConstruct('mrjuma',['mr','juma']));