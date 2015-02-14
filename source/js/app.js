/**
 * Created by laurie on 2/3/2015.
 */

/***
 * http://bl.ocks.org/rkirsling/5001347
 * @type {exports}
 */

function hideAllPanelsAndControls() {
    $("#circlePanel").hide();
    $("#algorithmPanel").hide();

    $("#dataStructureControls").hide();
}

function enableCanvas() {
    hideAllPanelsAndControls();
    $("#circlePanel").show();

}

function enableDataStructures() {
    hideAllPanelsAndControls();
    $("#dataStructureControls").show();
    $("#algorithmPanel").show();
}

function main() {
    "use strict";

    $(document).foundation();

    $("#stack").on("click", function () {
        stackDemo($("#console"));
    });

    $("#queue").on("click", function () {
        queueDemo($("#console"));
    });

    $("#linkedList").on("click", function () {
        linkedListDemo($("#console"));
    });

    $("#dataStructures").on("click", function () {
        enableDataStructures();
    });

    $("#canvas").on("click", function () {
        enableCanvas();
    });

    var draw = document.getElementById("drawCircle");
    draw.onclick = drawCircleOnClick;

    var clear = document.getElementById("clearCanvas");
    clear.onclick = clearCanvasOnClick;

    var demo = document.getElementById("demo");
    demo.onclick = demoOnClick;

    hideAllPanelsAndControls();



}

function runStackDemo() {

}



$(document).ready(function () {
    "use strict";

    // Main function
    main();

});

