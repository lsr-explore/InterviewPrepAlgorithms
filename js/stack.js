/**
 * Created by laurie on 2/3/2015.
 */




function stack(){
    this.head = null;
}

stack.prototype.push = function(val){
    var node = new element(val);
    if(!this.head){
        this.head = node;
    }
    else {
        var current = this.head;

        node.next = current;
        this.head = node;
    }
}

stack.prototype.pop = function(){

    var retVal;

    if (this.head) {
        var current = this.head;
        retVal = current.content;
        this.head = current.next;
    }

    return retVal;
}



stack.prototype.reportList = function() {
    console.log("Linked List contents....")
    var current = this.head;
    while (current) {
        console.log(current.content);
        current = current.next;
    }
}



stack.prototype.clearList = function() {
    this.head = null;
}

