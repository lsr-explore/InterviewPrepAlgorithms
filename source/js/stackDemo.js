/**
 * Created by laurie on 2/4/2015.
 */
function stackDemo(consoleOutput) {
    var stackList = new stack();

    consoleOutput.empty();

    var dt1 = new Date();

    stackList.push(1);
    stackList.push(2);
    stackList.push(3);

    displaySingleMessage("Pushed 1, 2, 3", consoleOutput)

    stackList.reportList(consoleOutput);

    var item = stackList.pop();
    displaySingleMessage("popped: " + item,  consoleOutput);
    stackList.reportList(consoleOutput);
    var item = stackList.pop();
    displaySingleMessage("popped: " + item, consoleOutput);
    var item = stackList.pop();
    displaySingleMessage("popped: " + item, consoleOutput);
    var item = stackList.pop();
    displaySingleMessage("popped: " + item, consoleOutput);
    stackList.reportList(consoleOutput);

    var dt2 = new Date();

    displaySingleMessage("Code took " + (dt2.getTime() - dt1.getTime()) + " milliseconds to execute", consoleOutput);
}


