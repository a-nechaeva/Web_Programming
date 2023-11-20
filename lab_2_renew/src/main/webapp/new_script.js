const request = new XMLHttpRequest();
var x
var y
var r

var cordX
var cordY

function gotData() {
    if (request.readyState == 4) {
        let status = request.status;
        if (status == 200) {
            document.getElementById("resultBox").innerText = request.responseText
        }
    }
}

document.getElementById("submitButton").onclick = function () {
    getFormData()
    if(sendRequestHandle()) {
        setCoordinates()
        setVisiblePoint()
    }
};

function setCoordinates() {
    cordX = convertToCoordinate(x)
    cordY = convertToCoordinate(y)
}

document.addEventListener('click', function (e) {
    if (e.target.getAttribute('id') == 'clrBtn') {
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
    if(validate()) {
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
            if(sendRequestHandle()) {
                setCoordinates()
                setVisiblePoint()
            }
        }
    })
});

function getFormData() {
    let form = document.getElementById("form")
    y = form.y.value.replace(",", ".")
    r = form.r.value
    x = form.x.value
}

window.onload = sendRequestGetData();

function validateCoordinates() {
    let msg = ""
    if (checkYInArea()){
        return true
    }
    if (!checkYInArea()) {
        msg+="Y должен быть (-5;3)\n"
    }
    alert(msg)
    return false
}

function checkYInArea(){
    if (y>-5 && y<3){
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
    point.setAttribute('cx',300+cordX)
    point.setAttribute('cy',300-cordY)
    point.setAttribute("visibility","visible")
}

function unsetVisiblePoint(){
    let point = document.getElementById("point")
    point.setAttribute('cx',300)
    point.setAttribute('cy',300)
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
    let centerY = 300
    if (cordY>centerY){
        cordY = -(cordY-centerY)
    }else {
        cordY = centerY- cordY
    }
}

function checkChoseR() {
    let form = document.getElementById('form')
    r = form.r.value
    return checkR(r);
}

function checkY(y) {
    let exceptionFieldY = document.getElementById('exceptionFieldY')

    if (y.length == 0) {
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

function checkR(r) {
    let exceptionFieldX = document.getElementById('exceptionFieldX')
    if (!isNumber(r)) {
        exceptionFieldX.innerText = "Выберите значение R"
        return false
    } else {
        exceptionFieldX.innerText = ""
        return true

    }
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0)
}