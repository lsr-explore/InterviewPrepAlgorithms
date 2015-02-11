/**
 * Created by laurie on 2/3/2015.
 */


function linkedListDemo() {
    var sll = new linkedList();

    //push node

//    sll.push(2);
//
//    sll.push(3);
//
//    sll.push(4);
//    sll.reportList();
//
//    sll.delete(3);
//
//    sll.reportList();
//
//    sll.push("a");
//    sll.reportList();
//
//    sll.delete(2);
//    sll.reportList();
//
//    sll.push("b");
//    sll.reportList();
//
//    sll.delete("b");
//    sll.reportList();
//
//    sll.clearList();
//
//    sll.reportList();
//
//    sll.push(1);
//    sll.push(2);
//    sll.push(3);
//    sll.push(4);
//    sll.push(5);
//    sll.push(6);
//
//    sll.reportList();
//
//    sll.move(2, 5);
//
//    sll.reportList();

    sll.push(1);
    sll.push(2);
    sll.push(3);
    sll.push(4);
    sll.push(5);
    sll.push(6);

    sll.reportList();

    sll.insertAfter("a", 3);

    sll.reportList();

    sll.insertBefore("b", 6) ;

    sll.reportList();

    sll.insertBefore("c", 1);
    sll.reportList();
}
