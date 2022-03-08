var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function updateUnit() {
    var val = document.getElementById("unit").value;
    var label = document.getElementById("unit-label");
    label.value = val;
    label.innerHTML = val;
}