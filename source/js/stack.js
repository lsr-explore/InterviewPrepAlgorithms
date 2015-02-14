/**
 * Created by laurie on 2/3/2015.
 */


//var element = require("./element.js");

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


stack.prototype.clearList = function() {
    this.head = null;
}
stack.prototype.reportList = function(consoleOutput) {
    displaySingleMessage("Stack contents....", consoleOutput);
    var current = this.head;
    while (current) {
        console.log(current.content);
        displaySingleMessage(current.content, consoleOutput);
        current = current.next;
    }
}

// comment out when running tests from html page
//module.exports =  stack;

