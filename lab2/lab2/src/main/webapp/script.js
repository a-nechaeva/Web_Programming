const request = new XMLHttpRequest();
var y
var r
var x

var cordX
var cordY

function gotData() {
    if (request.readyState === 4) {
        let status = request.status;
        if (status === 200) {
            document.getElementById("reqTable").innerHTML = request.responseText
        }
    }
}

document.getElementById("submitButton").onclick = function () {
    getFormData()
    if(sendRequestHandle()){
        setCoordinates()
        setVisiblePoint()
    }
};

function setCoordinates(){
    cordX = convertToCoordinate(x)
    cordY = convertToCoordinate(y)
}

document.addEventListener('click', function (e) {
    if (e.target.getAttribute('id') === 'clrBtn') {
        sendRequestClear()
        unsetVisiblePoint()
    }
});

function sendRequestGetData() {
    let response = "t=" + 3;
    request.open("GET", "ControllerServlet?" + response);
    request.onreadystatechange = gotData;
    request.send();
}

function sendRequestHandle() {
    if (validate()) {
        let response = "t=" + 1 + "&x=" + x + "&y=" + y + "&r=" + r;
        request.open("GET", "ControllerServlet?" + response);
        request.onreadystatechange = gotData;
        request.send();
        return true
    }
    return false;
}

function sendRequestClear() {
    let response = "t=" + 2;
    request.open("GET", "ControllerServlet?" + response);
    request.onreadystatechange = gotData;
    request.send();
}

document.querySelectorAll('.input').forEach(function (item) {
    item.addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
            event.preventDefault()
            getFormData()
            if(sendRequestHandle()){
                setCoordinates()
                setVisiblePoint()
            }
        }

    })
});

function getFormData() {
    let form = document.getElementById('form')
    y = form.y.value.replace(",", ".")
    r = form.r.value.replace(",", ".")
    x = form.x.value
}

window.onload = sendRequestGetData();

function validateCoordinates() {
    let msg = ""
    if (checkYInArea()&&checkXInArea()){
        return true
    }
    if (!checkYInArea()) {
        msg+="Y должен быть (-3;3)\n"
    }
    if(!checkXInArea()){
        msg+="X должен быть [-3;5]"
    }
    alert(msg)
    return false
}

function checkYInArea(){
    if (y>-3 && y<3){
        return true
    }
    return false
}

function checkXInArea(){
    if (x>=-3 && x<=5){
        return true
    }
    return false
}

function validate() {
    let isValidY = checkY(y)
    let isValidX = checkX(x)
    let isValidR = checkR(r)

    if (isValidY && isValidX && isValidR) {
        return true
    } else {
        return false
    }

}

document.querySelector('svg').addEventListener("mousedown", function (e) {
    cordX=e.offsetX
    cordY = e.offsetY
    detectClick()
});

function detectClick() {
    if (checkChoseR()) {
        convertCoordinates()
        if (validateCoordinates()){
            sendRequestHandle()
            setVisiblePoint()
        }
    }else{
        alert("Проверьте R")
    }
}

function setVisiblePoint(){
    let point = document.getElementById("point")
    point.setAttribute('cx',150+cordX)
    point.setAttribute('cy',150-cordY)
    point.setAttribute("visibility","visible")
}

function unsetVisiblePoint(){
    let point = document.getElementById("point")
    point.setAttribute('cx',150)
    point.setAttribute('cy',150)
    point.setAttribute("visibility","hidden")
}

function convertCoordinates() {
    changeXCord()
    changeYCord()
    x = convertCoordinate(cordX)
    y = convertCoordinate(cordY)
}

function convertCoordinate(coord){
    return (coord/120)*r;
}

function convertToCoordinate(value){
    return (value*120)/r;
}

function changeXCord(){
    let centerX = 150
    if (cordX < centerX){
        cordX = -(centerX-cordX)
    }else{
        cordX = cordX-centerX
    }
}

function changeYCord(){
    let centerY = 150
    if (cordY>centerY){
        cordY = -(cordY-centerY)
    }else {
        cordY = centerY- cordY
    }
}

function checkChoseR() {
    let form = document.getElementById('form')
    r = form.r.value.replace(",", ".")
    return checkR(r);
}

function checkY(y) {
    let exceptionFieldY = document.getElementById('exceptionFieldY')

    if (y.length === 0) {
        exceptionFieldY.innerText = "Поле Y не может быть пустым"
        return false

    } else if (!isNumber(y)) {
        exceptionFieldY.innerText = "Поле Y должно быть числом"
        return false
    } else if (!(y < 3 && y > -5)) {
        exceptionFieldY.innerText = "Поле Y должно быть (-5;3)"
        return false
    } else {
        exceptionFieldY.innerText = ""
        return true

    }
}

function checkR(r) {
    let exceptionFieldR = document.getElementById('exceptionFieldR')
    if (!rClicked) {
        exceptionFieldR.innerText = "¡Пожалуйста, выберите значение R! \n";
        return false;
    }
    return true;

}



// да, это костыль, и его по-хорошему нужно убирать
var rClicked = false;

let r1 = document.getElementById("b1");
r1.onclick = function () {
    rClicked = true;
};

let r15 = document.getElementById("b1.5");
r15.onclick = function () {
    rClicked = true;
};

let r2 = document.getElementById("b2");
r2.onclick = function () {
    rClicked = true;
};

let r25 = document.getElementById("b2.5");
r25.onclick = function () {
    rClicked = true;
};

let r3 = document.getElementById("b3");
r3.onclick = function () {
    rClicked = true;
};



function checkX(x) {
    let exceptionFieldX = document.getElementById('exceptionFieldX')
    if (!isNumber(x)) {
        exceptionFieldX.innerText = "Выберите значение X"
        return false
    } else {
        exceptionFieldX.innerText = ""
        return true

    }
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0)
}
function drawWithPoint() {
    drawingCanvas =
        document.getElementById('graph');

    var context =
        drawingCanvas.getContext('2d');
    gradient = context.createRadialGradient(304, 304, 40, 304, 304, 200);
    gradient.addColorStop(0, "#69b7eb");
    gradient.addColorStop(1, "#f4d6db");


    //рамочка
    context.beginPath();
    context.moveTo(2, 2);
    context.lineTo(606, 2); // линия вправо
    context.lineTo(610, 606); // линия вниз
    context.lineTo(2, 606); // линия влево
    context.lineTo(2, 2); // линия вверх
    //context.closePath(); // смыкание начала и конца рисунка (левая стена)
    context.strokeStyle = '#f4d6db'; // цвет
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
    // context.fillStyle = '#4682B4';
    context.fillStyle = gradient;
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

    for (var i = 0; i < pointsX.length; i++) {
        var xP = pointsX[i];
        var yP = pointsY[i];

        context.beginPath();
        context.arc(xP, yP, 5, 0, Math.PI * 2);

        if (i === (pointsX.length - 1)) {
            context.fillStyle = '#000000';
        } else {
            context.fillStyle = '#778899';
        }
        context.stroke();
        context.fill();


    }

    drawingCanvas.addEventListener("click", function(event) {

        // получили позицию холста на странице
        var rect = drawingCanvas.getBoundingClientRect();
        var xTr = event.clientX;
        var yTr = event.clientY;

        var x = xTr - rect.left;
        var y = yTr - rect.top;
        let error = document.getElementById("exceptionFieldR");
        if (rClicked) {
            pointsX.push(x);
            pointsY.push(y);
            rClicked = false;
            error.innerText = "";
        } else {
            error.innerText = "¡Пожалуйста, выберите значение R!";
        }

        drawWithPoint();
    });
}



// Проверка того, что установлено значение радиуса


function xChecker() {
    let chosen = false;


    let a = document.getElementById("xSelectorStyle").value;
    switch(a){
        case "-4": chosen = true; break;
        case "-3": chosen = true; break;
        case "-2": chosen = true; break;
        case "-1": chosen = true; break;
        case "0": chosen = true; break;
        case "1": chosen = true; break;
        case "2": chosen = true; break;
        case "3": chosen = true; break;
        case "4": chosen = true; break;
        default: chosen = false;
    }
    if (!chosen) {
        let error = document.getElementById("exceptionFieldX");
        error.innerText = "¡Пожалуйста, выберите значение X! \n";
        return false;
    }
    return true;

}

function clock() {
    let date = new Date(),
        hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
        seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds()

    document.getElementById('clock').innerText = hours + ':' + minutes + ':' + seconds
}

setInterval(clock, 1000)
clock()