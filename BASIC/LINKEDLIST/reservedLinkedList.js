let linkedList=(node,a=null,b=null)=>{
   
    if(node.next==null){
     node.next=a;
     return node;
    }
    b=node.next;
    node.next=a;
    a=node;
    return linkedList(b,a,b); 
 }
 
 let traverse=(node)=>{
   
   
    if(node==null) return;
    console.log(node.val)  
    traverse(node.next); 
 }
 
 class Node{
     constructor(val){
         this.val=val;
         this.next=null;
     }
 }
 let a=new Node('a');
 let b=new Node('b');
 let c=new Node('c');
 let d=new Node('d');
 let e=new Node('e');
 a.next=b;
 b.next=c;
 c.next=d;
 d.next=e;
 let x=linkedList(a);
 console.log(traverse(x));
 
 