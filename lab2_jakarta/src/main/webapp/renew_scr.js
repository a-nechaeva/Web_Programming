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
    let ns = "http://www.w3.org/2000/svg"
    let svg = document.getElementById('picture');
       if (pointsX.length > 0) {
           let need_to_remove_points = document.getElementsByClassName('new_p');
           for (let pp of need_to_remove_points) {
               pp.remove();
           }
        //здесь должно быть добавление точек

        let circle = document.createElementNS(ns, 'circle');
        circle.setAttribute('r', 5);
        circle.setAttribute('cx', pointsX[pointsX.length - 1]);
        circle.setAttribute('cy', pointsY[pointsY.length - 1]);
        circle.setAttribute('fill', 'midnightblue');
        circle.setAttribute('class', 'old');
        svg.append(circle);
        // see: https://ru.stackoverflow.com/questions/563297/svg-%D0%94%D0%B8%D0%BD%D0%B0%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-%D0%BF%D0%BE%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B0-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D1%83
       }

    let point_cur = document.createElementNS(ns, 'circle');
    point_cur.setAttribute('r', 5);
    point_cur.setAttribute('cx', 300 + cordX);
    point_cur.setAttribute('cy', 300 - cordY);
    point_cur.setAttribute('fill', 'darkmagenta');
    point_cur.setAttribute('stroke', 'magenta')
    point_cur.setAttribute('class', 'new_p');
    point_cur.setAttribute("visibility","visible")
    svg.append(point_cur);

    pointsX.push(300 + cordX)
    pointsY.push(300 - cordY)
}

function unsetVisiblePoint(){

    // проблема с точками!!! ЧЕТНЫЕ остаются WHY???
    let old_points = document.getElementsByClassName('old');
    for (let p of old_points) {
        p.setAttribute("visibility","hidden")
        p.remove();
    }
    let last_point = document.getElementsByClassName('new_p');
    for (let last_p of last_point) {
        last_p.setAttribute("visibility","hidden")
        last_p.remove();
    }

    pointsX = []
    pointsY = []
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