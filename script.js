var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var lifeExpectency = 90;
var scale = (52 * lifeExpectency) / canvas.clientHeight;
canvas.height *= scale;
var defaultHeight = 800;

var backgroundColor = "#FFFFFF";
var fillColor = "#FF0000";

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var day = 31;
var month = 1;
var year = 2000;
var numWeeks = 0;

function updateUnit() {
    var val = document.getElementById("unit").value;
    var label = document.getElementById("unit-label");
    label.value = val;
    label.innerHTML = val;
}

// Source: https://stackoverflow.com/questions/22859704/number-of-weeks-between-two-dates-using-javascript
function weeksBetween(d1, d2) {
    return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
}

function updateDate() {
    day = document.getElementById("day").value;
    month = months.indexOf(document.getElementById("month").value);
    year = document.getElementById("year").value;
    numWeeks = weeksBetween(new Date(year, month, day), new Date());
    
    lifeExpectency = document.getElementById("expect").value;
    scale = (52 * lifeExpectency) / canvas.clientHeight;
    canvas.height = defaultHeight * scale;
    updateCanvas();
}

function updateCanvas() {
    
    ctx.fillStyle = backgroundColor;
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fill();
    
    ctx.fillStyle = fillColor;
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, numWeeks);
    ctx.fill();
}