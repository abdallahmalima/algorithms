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
   if(node==null){
    return null;
   }
  let hasFound=false;
   if((node.left!=null && node.val==key)){
    hasFound=true;
    console.log(node.left.val);
   }
   if((node.right!=null && node.val==key)){
    hasFound=true;
    console.log(node.right.val);
   }
  
   if(hasFound){
       return node;
   }
  
   let uleft_node=binaryTree(node.left,key);
   if(uleft_node!=null){
    return  uleft_node;
   }
  
   let uright_node=binaryTree(node.right,key);
   if(uright_node!=null){
    return  uright_node;
   }
  
  
   return null;
  }
  console.log(binaryTree(one,2));
  