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
  
  let binaryTree=(node,nodeClone)=>{
   
    if(node==null) return;
  
    let copyLeftNode=null;
    let copyRightNode=null;
   if(node.left!=null) copyLeftNode=new Node(node.left.val);
   if(node.right!=null) copyRightNode=new Node(node.right.val);
  
   nodeClone.left=copyLeftNode;
   nodeClone.right=copyRightNode;
  
   binaryTree(node.left,copyLeftNode);
   binaryTree(node.right,copyRightNode);
  
   return ;
  }
  
  let realBtree=(node)=>{
    if(node==null) return;
    console.log(node.val);
    realBtree(node.left);
    realBtree(node.right);
  }
  let nodeClone=new Node(one.val);
  binaryTree(one,nodeClone);
  realBtree(one);
  console.log(".....");
  realBtree(nodeClone);
  
  
  