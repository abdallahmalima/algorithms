class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
  };
  
  let head=null;
  
  function add(node){
  if(head==null){
    head=node;
    return node;
  }
  let temp=head;
  while(temp.next!=null) {
    temp=temp.next;
  }
  temp.next=node;
  return node;
  
  
  
  }
  function print(node){
  if(node==null){
    return;
  }
  console.log(node.val);
  print(node.next)
  }
  
  function check(node1,node2){
    if(node1==null || node2==null){
      return true;
    }
  
    if(node1.val!=node2.val){
      return false;
    }
  
   return print(node1.next,node2.next);
    }
  
  function reverse(curr,prev=null){
    if(curr.next==null){
      curr.next=prev;
      return curr;
    } 
    let temp=curr.next;
    curr.next=prev;
    prev=curr;
   return reverse(temp,prev);
  
  }
  
  function isPelindrome(node){
     let slow=node;
     let fast=node.next;
     
     while(fast!=null){
      slow=slow.next;
      fast=fast.next.next;
     }
     slow=reverse(slow);
     fast=head;
  
     while(slow!=null || fast!=null){
      if(slow.val!=fast.val){
        return false
      }
      slow=slow.next;
      fast=fast.next;
     }
     
    return true;
  
  }
  
  add(new Node(1));
  add(new Node(2));
  add(new Node(3));
  add(new Node(4));
  add(new Node(3));
  add(new Node(2));
  add(new Node(1));
  console.log(isPelindrome(head));
  