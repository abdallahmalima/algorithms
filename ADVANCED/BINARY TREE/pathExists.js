class Node{
    constructor(val){
      this.val=val;
      this.left=null;
      this.right=null;
    }
  }
  
  let one=new Node(1);
  let two=new Node(2);
  let three=new Node(3);
  let four=new Node(4);
  let five=new Node(5);
  let six=new Node(6);
  
  one.left=two;
  one.right=three;
  two.left=four;
  two.right=five;
  three.right=six;
  
  let binaryTree=(node,arr,i)=>{
   
   if(node==null && (arr.length)>i) return false;
   if(node==null && (arr.length)==i) return true;
  
   if(node.val!=arr[i]) return false;
  
  if(binaryTree(node.left,arr,i+1)){
    return true;
  }
  
  if(binaryTree(node.right,arr,i+1)){
    return true;
  }
  
  
   return false;
  }
  console.log(binaryTree(one,[1,3,6],0));  