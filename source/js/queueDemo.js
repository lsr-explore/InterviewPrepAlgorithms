/**
 * Created by laurie on 2/4/2015.
 */
function queueDemo(consoleOutput) {
    var queueList = new queue();

    var dt1 = new Date();

    queueList.enqueue(1);
    queueList.enqueue(2);
    queueList.enqueue(3);

    displaySingleMessage("Engueued 1, 2, 3", consoleOutput)


    queueList.reportList(consoleOutput);

    var item = queueList.dequeue();
    displaySingleMessage("debuqueued: " + item, consoleOutput);
    queueList.reportList(consoleOutput);
    var item = queueList.dequeue();
    displaySingleMessage("debuqueued: " + item, consoleOutput);
    var item = queueList.dequeue();
    displaySingleMessage("debuqueued: " + item, consoleOutput);
    var item = queueList.dequeue();
    displaySingleMessage("debuqueued: " + item, consoleOutput);
    queueList.reportList(consoleOutput);

    var dt2 = new Date();

    displaySingleMessage("Code took " + (dt2.getTime() - dt1.getTime()) + " milliseconds to execute", consoleOutput);
};