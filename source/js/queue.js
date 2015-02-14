/**
 * Created by laurie on 2/3/2015.
 */


function queue(){
    this.head = null;
}

queue.prototype.enqueue = function(val){
    var node = new element(val);
    if(!this.head){
        this.head = node;
    }
    else{
        var current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = node;
    }
}

queue.prototype.dequeue = function(){

    var retVal;

    if (this.head) {
        var current = this.head;
        retVal = current.content;
        this.head = current.next;
    }

    return retVal;
}

queue.prototype.peak = function() {
    this.head = null;
}

queue.prototype.isEmpty = function() {
    return(this.head === undefined);
}

queue.prototype.reportList = function(consoleOutput) {
    displaySingleMessage("Queue contents....", consoleOutput);
    var current = this.head;
    while (current) {
        displaySingleMessage(current.content, consoleOutput);
        current = current.next;
    }
}



queue.prototype.clearList = function() {
    this.head = null;
}