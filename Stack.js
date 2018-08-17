class Node{
  constructor(data){
    this.value=data;
    this.previous=null;
  }
}
class Stack{
  constructor(){
    this.top=null;
    this.size=0;
  }
  add(element){
    var nodetobeinserted= new Node(element);
    if(this.top==null){
      this.top= nodetobeinserted;
      this.size++;
      $("#first").html("first element added is: "+this.top.value);
    }
    else{
      nodetobeinserted.previous=this.top;
      this.top=nodetobeinserted;
      this.size++;
      return this.top.value;
    }
  }
  print(){
    var text="",utility=this.top;
    for(var i=0;i<this.size;i++){
      text+=utility.value+"<br>";
      utility=utility.previous;
    }
    $("#stack").html(text);
  }
  delete(){
    $("#principle").html("Stack follows LIFO principle. So the last element added i.e. '0' is deleted first.");
    $("#after").html("So the stack after deletion of '0' is:");
    var utility2=this.top,text2="";
    utility2=utility2.previous;
    this.size--;
    for(var m=0;m<this.size;m++){
      text2+=utility2.value+"<br>";
      utility2=utility2.previous;
    }
    $("#stack2").html(text2);
  }
}
