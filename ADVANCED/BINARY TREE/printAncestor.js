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
  
  let binaryTree=(node,key)=>{
   if(node==null) return false;
   if(node.val==key) return true;
  
  
  if(binaryTree(node.left,key)){
    console.log(node.val)
    return true;
  }
  
  if(binaryTree(node.right,key)){
    console.log(node.val)
    return true;
  }
  
  
   return false;
  }
  console.log(binaryTree(one,6));
  