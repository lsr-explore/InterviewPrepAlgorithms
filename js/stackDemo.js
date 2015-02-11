/**
 * Created by laurie on 2/4/2015.
 */
function stackDemo() {
    var stackList = new stack();


    stackList.push(1);
    stackList.push(2);
    stackList.push(3);


    stackList.reportList();

    var item = stackList.pop();
    console.log("popped: " + item);
    stackList.reportList();
    var item = stackList.pop();
    console.log("popped: " + item);
    var item = stackList.pop();
    console.log("popped: " + item);
    var item = stackList.pop();
    console.log("popped: " + item);
    stackList.reportList();
}
