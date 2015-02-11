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
    ctx.strokeStyle = "blue";
    ctx.fillStyle = '#8ED6FF';
    //ctx.lineCap = "round";
    //ctx.lineJoin = "round";
    ctx.shadowBlur = properties.blur;
    ctx.shadowColor = "blue";
    //ctx.translate(2,2);

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
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function drawCircleUsingArc(properties, ctx) {
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

    return {
        radius: radiusVal,
        xOrigin: xOriginVal,
        yOrigin: yOriginVal,
        filled: filledVal,
        clear: cleanCanvas,
        blur: blurVal,
        lineWidth : lineWidthVal,
        useArc : useArc
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
}

function resizeCanvas() {
    inMemCanvas.width = canvasRef.width;
    inMemCanvas.height = canvasRef.height;
    inMemCtx.drawImage(canvasRef, 0, 0);
    canvasRef.width = 1000;
    ctx.drawImage(inMemCanvas, 0, 0);
}

function mainApp() {
    var draw = document.getElementById("drawCircle");
    draw.onclick = drawCircleOnClick;

    var clear = document.getElementById("clearCanvas");
    clear.onclick = clearCanvasOnClick;
}

$(document).ready(function() {
   mainApp();
});