/**
 * Created by laurie on 2/3/2015.
 */




function linkedList(){
    this.head = null;
}

linkedList.prototype.push = function(val){
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

linkedList.prototype.delete = function(val) {
    var current = this.head;
    var last;
    while(current){
        if (current.content == val) {
            if (current === this.head) {
                this.head = current.next;
            } else {
                last.next = current.next;
                current.next = undefined;
            }
        }
        last = current;
        current = current.next;
    }
}

linkedList.prototype.reportList = function() {
    console.log("Linked List contents....")
    var current = this.head;
    while (current) {
        console.log(current.content);
        current = current.next;
    }
}

linkedList.prototype.move = function(itemToMove, insertAfterItem) {
    var current = this.head;

    var prevElementToMove;
    var elementToMove;
    var elementInsertionPoint;
    var last;

    while(current) {
        if (current.content === itemToMove) {
            prevElementToMove = last;
            elementToMove = current;
        }
        if (current.content === insertAfterItem) {
            elementInsertionPoint = current;
        }
        last = current;
        current = current.next;
    }
    prevElementToMove.next = elementToMove.next;
    elementToMove.next = elementInsertionPoint.next;
    elementInsertionPoint.next = elementToMove;
}

linkedList.prototype.insertAfter = function(val, insertAfterItem) {
    var current = this.head;

    var node = new element(val);

    while(current) {
        if (current.content === insertAfterItem) {
            node.next = current.next;
            current.next = node;
        }
        current = current.next;
    }
}

linkedList.prototype.insertBefore = function(val, insertBeforeItem) {
    var current = this.head;

    var prevElementToMove;
    var elementToMove;
    var elementInsertionPoint;
    var last;

    var node = new element(val);

    while(current) {
        if (current.content === insertBeforeItem) {

            if (current === this.head) {
                node.next = current;
                this.head = node;
            }  else {
                node.next = last.next;
                last.next = node;
            }
        }
        last = current;
        current = current.next;
    }
}

linkedList.prototype.clearList = function() {
    this.head = null;
}

