/**
 * Created by laurie on 2/3/2015.
 */

/***
 * http://bl.ocks.org/rkirsling/5001347
 * @type {exports}
 */

function main() {
    "use strict";

    $(document).foundation();

    var dt1 = new Date();
    displayMessages(generateAnagrams("scab"));
    var dt2 = new Date();

    //linkedListDemo();
    //stackDemo();
    //queueDemo();

   // number = prompt("Enter a number:", "5")
    //document.write(factorial(number));

    displaySingleMessage("Code took " + (dt2.getTime() - dt1.getTime()) + " milliseconds to execute");
}

function process(data, item) {
    consoleOutput.append(item);
    consoleOutput.append("<br>");
}

function displayMessages(msg) {
    var consoleOutput = $("#console");
    for (index in msg)
    {
        var item = msg[index];
        item = item.replace(/\s/g, '');
        var url = "http://en.wiktionary.org/w/api.php?action=query&titles=" + item;
        var retVal = $.getJSON(url)
            .done(function(data, item) {
                "use strict";
                process(data);
            });

    }
}

function displaySingleMessage(msg) {
    var consoleOutput = $("#console");
    consoleOutput.append(msg);
}

$(document).ready(function () {
    "use strict";

    // Main function
    main();

});

