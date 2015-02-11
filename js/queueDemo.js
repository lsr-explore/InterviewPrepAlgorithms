/**
 * Created by laurie on 2/4/2015.
 */
function queueDemo() {
    var queueList = new queue();


    queueList.enqueue(1);
    queueList.enqueue(2);
    queueList.enqueue(3);


    queueList.reportList();

    var item = queueList.dequeue();
    console.log("debuqueued: " + item);
    queueList.reportList();
    var item = queueList.dequeue();
    console.log("debuqueued: " + item);
    var item = queueList.dequeue();
    console.log("debuqueued: " + item);
    var item = queueList.dequeue();
    console.log("debuqueued: " + item);
    queueList.reportList();
}
;