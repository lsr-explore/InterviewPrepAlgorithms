/**
 * Created by laurie on 2/8/2015.
 */
function drawCircle(properties) {
    var canvasArea = document.getElementById("drawingCanvas");

    var ctx = canvasArea.getContext("2d");
    if (properties.clear) {
        ctx.clearRect(0, 0, canvasArea.width, canvasArea.height);
    }
    ctx.lineWidth = properties.lineWidth;
    ctx.strokeStyle = properties.lineColor;
    ctx.fillStyle = properties.fillColor;
    ctx.shadowBlur = properties.blur;
    ctx.shadowColor = properties.blurColor;

    // Other properties, not yet set
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.beginPath();

    if (properties.useArc) {
        drawCircleUsingArc(properties, ctx);
    } else {

        drawCircleUsingPoints(properties, ctx);
    }

    ctx.closePath();
    if (properties.filled) {
        ctx.fill();
    }
}

function drawCircleUsingPoints(properties, ctx) {

    for (angle = 0; angle <= 360; angle++) {

        var angleInRadians = (angle * Math.PI) / 180; // Convert to Radians
        x = Math.floor(properties.xOrigin + properties.radius * Math.sin(angleInRadians) );
        y = Math.floor(properties.yOrigin + properties.radius * Math.cos(angleInRadians) );

        //ctx.arc(x, y, 1, 0, 2 * Math.PI, false);
        ctx.lineTo(x, y);

        //ctx.strokeRect(x,y,1,1);
    }
    ctx.stroke();
}

function drawCircleUsingArc(properties, ctx) {
    ctx.beginPath();
    ctx.arc(properties.xOrigin, properties.yOrigin, properties.radius, 0, 2 * Math.PI, false);
    ctx.stroke();
}

function getFormData() {
    formData = document.forms[0];
    var radiusVal = parseInt(formData.elements["radiusInput"].value);
    var xOriginVal = parseInt(formData.elements["xOriginInput"].value);
    var yOriginVal = parseInt(formData.elements["yOriginInput"].value);
    var blurVal = parseInt(formData.elements["blurInput"].value);
    var lineWidthVal = parseInt(formData.elements["lineWidthInput"].value);
    var filledVal = formData.elements["fillCircle"].checked;
    var cleanCanvas = formData.elements["cleanTheCanvas"].checked;
    var useArc = formData.elements["useArc"].checked;

    if (radiusVal === undefined || isNaN(radiusVal)) {
        radiusVal = 200;
    }

    if (xOriginVal === undefined | isNaN(xOriginVal)) {
        xOriginVal = 250;
    }

    if (yOriginVal === undefined || isNaN(yOriginVal)) {
        yOriginVal = 250;
    }

    if (blurVal === undefined || isNaN(blurVal)) {
        blurVal = 0;
    }

    if (lineWidthVal === undefined || isNaN(lineWidthVal)) {
        lineWidthVal = 0;
    }

    // For now - hard code these values
    var fillColorVal = "yellow";
    var lineColorVal = "black";
    var blurColorVal = "grey";
    return {
        radius: radiusVal,
        xOrigin: xOriginVal,
        yOrigin: yOriginVal,
        filled: filledVal,
        clear: cleanCanvas,
        blur: blurVal,
        lineWidth : lineWidthVal,
        useArc : useArc,
        lineColor: lineColorVal,
        fillColor: fillColorVal,
        blurColor: blurColorVal
    }

}

function drawCircleOnClick() {
    var properties = getFormData();
    drawCircle(properties);
    return false;
}

function clearCanvasOnClick() {
    var canvasArea = document.getElementById("drawingCanvas");

    var ctx = canvasArea.getContext("2d");
    ctx.clearRect(0, 0, canvasArea.width, canvasArea.height);
    return false;
}

function demoOnClick () {
    clearCanvasOnClick();
    drawCircle1(defaultProperties());
    drawCircle2(defaultProperties());
    drawCircle3(defaultProperties());
    drawCircle4(defaultProperties());
    return false;
}


/**********************
 Canned demo cases
 **********************/

function defaultProperties () {
    return {
        radius: 50,
        xOrigin: 100,
        yOrigin: 100,
        filled: false,
        clear: false,
        blur: 0,
        lineWidth : 2,
        useArc : false,
        fillColor: "yellow",
        lineColor: "black",
        blurColor: "grey"
    };
}

function drawCircle1(properties) {

    drawCircle(properties);
}

function drawCircle2(properties) {
    properties.xOrigin = 300;
    properties.blur = 4;

    drawCircle(properties);
}

function drawCircle3(properties) {
    properties.yOrigin = 300;
    properties.useArc = true;
    drawCircle(properties);
}

function drawCircle4(properties) {
    properties.xOrigin = 300;
    properties.yOrigin = 300;
    properties.useArc = true;
    properties.blur = 4;
    drawCircle(properties);
}