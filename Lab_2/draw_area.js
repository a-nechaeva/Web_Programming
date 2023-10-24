var  drawingCanvas;

window.onload = function () {
     drawingCanvas =
        document.getElementById('graph');
    var context =
        drawingCanvas.getContext('2d');
    /*if (
        drawingCanvas &&
        drawingCanvas.getContext
    ) {
        var context =
            drawingCanvas.getContext('2d');


        //рамочка

        context.beginPath();
        context.moveTo(2, 2);
        context.lineTo(606, 2); // линия вправо
        context.lineTo(610, 606); // линия вниз
        context.lineTo(2, 606); // линия влево
        context.lineTo(2, 2); // линия вверх
        //context.closePath(); // смыкание начала и конца рисунка (левая стена)
        context.strokeStyle = '#87CEFA'; // тёмно-синий цвет
        context.lineWidth = 5; // толщина линии в 5px
        context.fillStyle = '#FFFAFA';
        context.fill();
        context.stroke();


        // рисуем прямоугольник
        context.beginPath();
        context.moveTo(304, 304);
        context.lineTo(304, 404);
        context.lineTo(104, 404);
        context.lineTo(104, 304);
        context.lineTo(304, 304);
        context.fillStyle = '#4682B4';
        context.strokeStyle = '#4682B4';
        context.lineWidth = 1;
        //context.closePath();
        context.stroke();
        context.fill();

        // рисуем сектор
        context.beginPath();
        context.arc(304, 304, 100, 0, Math.PI / 2);
        context.lineTo(304, 304);
        context.lineTo(404, 304);
        context.stroke();
        context.fill();

        //рисуем треугольник
        context.beginPath();
        context.moveTo(304, 304);
        context.lineTo(304, 104);
        context.lineTo(404, 304);
        context.lineTo(304, 304);
        context.stroke();
        context.fill();

        // оси
        context.beginPath();
        context.moveTo(4, 304);
        context.lineTo(604, 304);
        context.strokeStyle = '#000000';
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(304, 4);
        context.lineTo(304, 604);
        context.stroke();

        // засечки на осях Х
        context.beginPath();
        context.moveTo(404, 300);
        context.lineTo(404, 308);
        context.strokeStyle = '#000000';
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(504, 300);
        context.lineTo(504, 308);
        context.strokeStyle = '#000000';
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(204, 300);
        context.lineTo(204, 308);
        context.strokeStyle = '#000000';
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(104, 300);
        context.lineTo(104, 308);
        context.strokeStyle = '#000000';
        context.lineWidth = 2;
        context.stroke();

        // на оси У

        context.beginPath();
        context.moveTo(300, 204);
        context.lineTo(308, 204);
        context.strokeStyle = '#000000';
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(300, 104);
        context.lineTo(308, 104);
        context.strokeStyle = '#000000';
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(300, 404);
        context.lineTo(308, 404);
        context.strokeStyle = '#000000';
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(300, 504);
        context.lineTo(308, 504);
        context.strokeStyle = '#000000';
        context.lineWidth = 2;
        context.stroke();

        // подписи засечек
        context.font = "22px Verdana";
        context.fillStyle = '#000000';
        context.lineWidth = 1;
        context.fillText("R/2", 394, 290);
        context.fillText("R/2", 260, 204);
        context.fillText("-R/2", 184, 290);
        context.fillText("-R/2", 250, 430);
        context.fillText("-R", 260, 510);
        context.fillText("-R", 90, 290);
        context.fillText("R", 495, 290);
        context.fillText("R", 280, 110);


     */
    drawingCanvas.addEventListener("click", function(event) {
        drawingCanvas =
            document.getElementById('graph');
        var context =
            drawingCanvas.getContext('2d');
        // получили позицию холста на странице
        var rect = drawingCanvas.getBoundingClientRect();
        var xTr = event.clientX;
        var yTr = event.clientY;

        var x = xTr - rect.left;
        var y = yTr = rect.top;

        points[points.length][0] = xTr;
        points[points.length][1] = yTr;
        drawWithPoint();
        if (x > 20 && x < 120 && y > 20 && y < 70) {
            alert("Вы кликнули в область!");
        }
    });
        drawWithPoint();
        drawingCanvas.onclick = canvasClick;
  //  }
}

// обработка кликов пользователя по изображению

function canvasClick(e) {

    // получаем координаты точки холста, в которую щелкнули, сразу с учетом сдвига осей
    var clickX = e.pageX - drawingCanvas.offsetLeft() - 4;
    var clickY = e.pageY - drawingCanvas.offsetTop() - 4;

    points[points.length][0] = e.pageX;
    points[points.length][1] = e.pageY;
    drawWithPoint();

}
/*drawingCanvas.addEventListener("click", function(event) {
    drawingCanvas =
        document.getElementById('graph');
    var context =
        drawingCanvas.getContext('2d');
    // получили позицию холста на странице
    var rect = drawingCanvas.getBoundingClientRect();
    var xTr = event.clientX;
    var yTr = event.clientY;

    var x = xTr - rect.left;
    var y = yTr = rect.top;

    points[points.length][0] = xTr;
    points[points.length][1] = yTr;
    drawWithPoint();
    if (x > 20 && x < 120 && y > 20 && y < 70) {
        alert("Вы кликнули в область!");
    }
   });

 */

var points = [];
points[0] = [];

function drawWithPoint() {
    drawingCanvas =
        document.getElementById('graph');
   /* if (
        drawingCanvas &&
        drawingCanvas.getContext
    ) {

    */
        var context =
            drawingCanvas.getContext('2d');

    //context.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);


        //рамочка

        context.beginPath();
        context.moveTo(2, 2);
        context.lineTo(606, 2); // линия вправо
        context.lineTo(610, 606); // линия вниз
        context.lineTo(2, 606); // линия влево
        context.lineTo(2, 2); // линия вверх
        //context.closePath(); // смыкание начала и конца рисунка (левая стена)
        context.strokeStyle = '#87CEFA'; // тёмно-синий цвет
        context.lineWidth = 5; // толщина линии в 5px
        context.fillStyle = '#FFFAFA';
        context.fill();
        context.stroke();


        // рисуем прямоугольник
        context.beginPath();
        context.moveTo(304, 304);
        context.lineTo(304, 404);
        context.lineTo(104, 404);
        context.lineTo(104, 304);
        context.lineTo(304, 304);
        context.fillStyle = '#4682B4';
        context.strokeStyle = '#4682B4';
        context.lineWidth = 1;
        //context.closePath();
        context.stroke();
        context.fill();

        // рисуем сектор
        context.beginPath();
        context.arc(304, 304, 100, 0, Math.PI / 2);
        context.lineTo(304, 304);
        context.lineTo(404, 304);
        context.stroke();
        context.fill();

        //рисуем треугольник
        context.beginPath();
        context.moveTo(304, 304);
        context.lineTo(304, 104);
        context.lineTo(404, 304);
        context.lineTo(304, 304);
        context.stroke();
        context.fill();

        // оси
        context.beginPath();
        context.moveTo(4, 304);
        context.lineTo(604, 304);
        context.strokeStyle = '#000000';
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(304, 4);
        context.lineTo(304, 604);
        context.stroke();

        // засечки на осях Х
        context.beginPath();
        context.moveTo(404, 300);
        context.lineTo(404, 308);
        context.strokeStyle = '#000000';
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(504, 300);
        context.lineTo(504, 308);
        context.strokeStyle = '#000000';
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(204, 300);
        context.lineTo(204, 308);
        context.strokeStyle = '#000000';
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(104, 300);
        context.lineTo(104, 308);
        context.strokeStyle = '#000000';
        context.lineWidth = 2;
        context.stroke();

        // на оси У

        context.beginPath();
        context.moveTo(300, 204);
        context.lineTo(308, 204);
        context.strokeStyle = '#000000';
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(300, 104);
        context.lineTo(308, 104);
        context.strokeStyle = '#000000';
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(300, 404);
        context.lineTo(308, 404);
        context.strokeStyle = '#000000';
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(300, 504);
        context.lineTo(308, 504);
        context.strokeStyle = '#000000';
        context.lineWidth = 2;
        context.stroke();

        // подписи засечек
        context.font = "22px Verdana";
        context.fillStyle = '#000000';
        context.lineWidth = 1;
        context.fillText("R/2", 394, 290);
        context.fillText("R/2", 260, 204);
        context.fillText("-R/2", 184, 290);
        context.fillText("-R/2", 250, 430);
        context.fillText("-R", 260, 510);
        context.fillText("-R", 90, 290);
        context.fillText("R", 495, 290);
        context.fillText("R", 280, 110);

        for (var i = 0; i < points.length; i++) {
            var xP = points[i][0];
            var yP = points[i][1];

            context.beginPath();
            context.arc(xP, yP, 10, 0, Math.PI * 2);
            context.fillStyle = '#000000';
            context.stroke();
            context.fill();

        }
    drawingCanvas.addEventListener("click", function(event) {
        drawingCanvas =
            document.getElementById('graph');
        var context =
            drawingCanvas.getContext('2d');
        // получили позицию холста на странице
        var rect = drawingCanvas.getBoundingClientRect();
        var xTr = event.clientX;
        var yTr = event.clientY;

        var x = xTr - rect.left;
        var y = yTr = rect.top;

        points[points.length][0] = xTr;
        points[points.length][1] = yTr;
        drawWithPoint();
        if (x > 20 && x < 120 && y > 20 && y < 70) {
            alert("Вы кликнули в область!");
        }
    });
        drawingCanvas.onclick = canvasClick;
   // }
}