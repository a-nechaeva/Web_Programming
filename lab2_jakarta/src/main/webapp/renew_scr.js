const request = new XMLHttpRequest();
let y
let r
let x

let cordX
let cordY

var pointsX = [];
var pointsY = [];

function gotData() {
    if (request.readyState === 4) {
        let status = request.status;
        if (status === 200) {
            document.getElementById("resultBox").innerHTML = request.responseText
        }
    }
}




document.getElementById("subBtn").onclick = function () {
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
    request.open("POST", "ControllerServlet?" + response);
    request.onreadystatechange = gotData();

    request.send();
}

function sendRequestHandle() {
    if (validate()) {
        let response = "t=" + 1 + "&x=" + x + "&y=" + y + "&r=" + r;
        request.open("POST", "ControllerServlet?" + response);
        request.onreadystatechange = gotData;
        request.send();
        return true
    }
    return false;
}

function sendRequestClear() {
    let response = "t=" + 2;
    request.open("POST", "ControllerServlet?" + response);
    request.onreadystatechange = gotData;
    request.send();
}


function getFormData() {
    let form = document.getElementById('form')
    y = form.y.value.replace(",", ".")
    let rs = document.documentElement.getElementsByClassName("rRadio");
    for (let rr of rs) {
        if (rr.checked) {
            r = rr.value.replace(",", ".");
            break;
        }
    }
    x = form.x.value
}

window.onload = sendRequestGetData();

function validateCoordinates() {
    let msg = ""
    if (checkYInArea()&&checkXInArea()){
        return true
    }
    if (!checkYInArea()) {
        msg+="Y должен быть (-5;3)\n"
    }
    if(!checkXInArea()){
        msg+="X должен быть {-5;3}"
    }
    alert(msg)
    return false
}

function checkYInArea(){
    return y > -5 && y < 3;

}

function checkXInArea(){
    return x >= -5 && x <= 3;

}

function validate() {
    let isValidY = checkY(y)
    let isValidX = checkX(x)
    let isValidR = checkR(r)

    return isValidY && isValidX && isValidR;
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
    point.setAttribute('cx',300 + cordX)
    point.setAttribute('cy',300 - cordY)
    point.setAttribute("visibility","visible")
    /*if (pointsX.length > 0) {
        //здесь должно быть добавление точек
        for (let i = 0; i < pointsX.length; i++) {
            var addCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            addCircle.setAttribute("r", "5");
            addCircle.setAttribute("cx", pointsX[i]);
            addCircle.setAttribute("cy", pointsY[i]);
            addCircle.setAttribute("fill-opacity", "0.7");
            addCircle.setAttribute("fill", "blue");
            addCircle.setAttribute("stroke", "blue");
            addCircle.setAttribute("visibility", "visible")
            document.querySelector("svg").appendChild(addCircle);
        }
    }

     */
    var svg = document.querySelector('#picture');
    var circ=document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    circ.style.fill="red";
    circ.style.r="10";
    circ.style.cx="300";
    circ.style.cy="300";
    svg.appendChild(circ);

    pointsX.push(300 + cordX)
    pointsY.push(300 - cordY)
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
    return (coord/240)*r;
}

function convertToCoordinate(value){
    return (value*240)/r;
}

function changeXCord(){
    let centerX = 300
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

    let rs = document.documentElement.getElementsByClassName("rRadio");
    let chosen = false;

    for (let rr of rs) {
        if (rr.checked) {
            r = rr.value;
            chosen = true;
            break;
        }
    }
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
        exceptionFieldY.innerText = "Поле Y должно быть (-3;3)"
        return false
    } else {
        exceptionFieldY.innerText = ""
        return true

    }
}

function checkR(r) {
     let exceptionFieldR = document.getElementById('exceptionFieldR')
      if (!isNumber(r)) {
          exceptionFieldR.innerText = "Выберите значение R"
          return false
      } else {
          exceptionFieldR.innerText = ""
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

function isNumber(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0)
}