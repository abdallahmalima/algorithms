let puzzle=[
    ['O','H','L','H','H'],
    ['U','L','E','H','H'],
    ['H','H','E','L','H'],
    ['O','H','H','H','O'],
    ['H','H','E','L','O']
  ]
  let str="HELO";
  for(let first=0;first<5;first++){
    for(let second=0;second<5;second++){
         let strr='';
        let i=first;
        let y=second;
          while(i<str.length+first && y<str.length+second){
            if(i<5 && i>=0 && y<5 && y>=0) strr+=puzzle[i--][y--];
            else break;
            
          }
          if(strr==str){
            console.log("Got you")
          }
          
      }
    }
    
  
  