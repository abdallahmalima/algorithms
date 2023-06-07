let x=[4,5,6];
for(let first=0;first<10;first++){
  for(let second=0;second<10;second++){
    for(let third=0;third<10;third++){
      let firstInBound=first==4 || first==5 || first==6;
      let firstUnique=firstInBound && first !=second && first !=third;

      let secondInBound=second==4 || second==5 || second==6;
      let secondUnique=secondInBound && second !=first && second !=third;

      let thirdInBound=third==4 || third==5 || third==6;
      
       if(firstUnique && secondUnique && thirdInBound){
         console.log(first+""+second+""+third);
       }
      
    }
  }
}
