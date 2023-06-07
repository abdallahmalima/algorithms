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
    if(node==null) return 0 ;
  
   let leftNodeCount=binaryTree(node.left);
   let rightNodeCount=binaryTree(node.right);
  
   return 1+Math.max(leftNodeCount,rightNodeCount);
  }
  console.log(binaryTree(one));