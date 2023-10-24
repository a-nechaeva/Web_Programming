
var canvas = document.getElementById("ex");
var ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.rect(20, 20, 100, 50);
ctx.fillStyle = "#000000";
ctx.fill();
ctx.closePath();
ctx.stroke();


canvas.addEventListener("click", function (event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    if (x > 20) {
        alert("Succsess!");
    }
});

