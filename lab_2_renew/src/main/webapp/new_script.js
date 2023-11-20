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

