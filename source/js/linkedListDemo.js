/**
 * Created by laurie on 2/3/2015.
 */


function linkedListDemo(consoleOutput) {
    var sll = new linkedList();

    // push node

    sll.push(2);

    sll.push(3);

    sll.push(4);
    sll.reportList(consoleOutput);

    sll.deleteLink(3);

    sll.reportList(consoleOutput);

    sll.push("a");
    sll.reportList(consoleOutput);

    sll.deleteLink(2);
    sll.reportList(consoleOutput);

    sll.push("b");
    sll.reportList(consoleOutput);

    sll.deleteLink("b");
    sll.reportList(consoleOutput);

    sll.clearList();

    sll.reportList(consoleOutput);

    sll.push(1);
    sll.push(2);
    sll.push(3);
    sll.push(4);
    sll.push(5);
    sll.push(6);

    sll.reportList(consoleOutput);

    sll.move(2, 5);

    sll.reportList(consoleOutput);

    sll.push(1);
    sll.push(2);
    sll.push(3);
    sll.push(4);
    sll.push(5);
    sll.push(6);

    sll.reportList(consoleOutput);

    sll.insertAfter("a", 3);

    sll.reportList(consoleOutput);

    sll.insertBefore("b", 6) ;

    sll.reportList(consoleOutput);

    sll.insertBefore("c", 1);
    sll.reportList(consoleOutput);
}
