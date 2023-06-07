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
  
  let binaryTree=(node)=>{
    if(node==null) return Infinity ;
    if(node.left==null && node.right==null) return node.val ;
   
   let leftNodeMax=binaryTree(node.left);
   let rightNodeMax=binaryTree(node.right);
  
   return node.val+ Math.min(leftNodeMax,rightNodeMax);
  }
  console.log(binaryTree(one));
  