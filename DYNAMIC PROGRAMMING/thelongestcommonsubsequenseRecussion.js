let  lcs=(str1,str2)=>{
    let i=0,j=0;
    if(str1.length==0 || str2.length==0) return 0;
   
    if(str1[i]==str2[j]){
      return 1+lcs(str1.substring(i+1),str2.substring(j+1));
    }else{
      return Math.max(lcs(str1.substring(i+1),str2.substring(j)),lcs(str1.substring(i),str2.substring(j+1)))
    }
  }
  console.log(lcs("stonee","stone"));