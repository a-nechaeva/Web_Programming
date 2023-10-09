let clickedElements = document.documentElement.getElementsByClassName("clickedElement");
for (let clickedElement of clickedElements) {
    clickedElement.onclick = function () {
        let child = clickedElement.children[0];
        if (event.target === child) {
            if (clickedElement.classList.contains("selectedClickedElement")) {
                clickedElement.classList.remove("selectedClickedElement");
                clickedElement.classList.add("clickedElement");
            } else {

                clickedElement.classList.remove("clickedElement");
                clickedElement.classList.add("selectedClickedElement");
            }
        } else {
            if (child.checked) {
                child.checked = false;
            } else {
                child.checked = true;
            }
            if (clickedElement.classList.contains("selectedClickedElement")) {
                clickedElement.classList.remove("selectedClickedElement");
                clickedElement.classList.add("clickedElement");
            } else {
                clickedElement.classList.remove("clickedElement");
                clickedElement.classList.add("selectedClickedElement");
            }
        }
        if (child.classList.contains("rRadio")) {
            let radios = document.documentElement.getElementsByClassName("rRadio");
            for (let radio of radios) {
                if (!(radio === child)) {
                    if (radio.parentElement.classList.contains("selectedClickedElement")) {
                        radio.parentElement.classList.replace("selectedClickedElement", "clickedElement");
                    }
                }
            }
        }
    }
}

let submitDiv = document.getElementById("submitDiv");
submitDiv.onclick = function () {
    document.getElementById("submitButton").click();
}

if (document.getElementById("requestAnswer") === null) {
    startAnimation();
} else {
    makeMainVisible();
}

function makeMainVisible() {
    let main = document.getElementById("main");
    for (let i = 0; i < main.classList.length; i++) {
        main.classList.remove("invisible");
        main.classList.add("visible");
    }
    for (let mainClass of main.classList) {
        console.log(mainClass);
    }
}

function startAnimation() {
    let header = document.getElementById("header");
    let start = Date.now();
    let animationTime = 1000;
    let timer = setInterval(function () {
        let timePassed = Date.now() - start;

        if (timePassed >= 1000) {
            clearInterval(timer);
            makeMainVisible();
            return;
        }
        draw(timePassed);

    }, 20);

    function draw(timePassed) {
        let kofH = 1 / animationTime;
        header.style.opacity = kofH * timePassed;
    }
}

window.onload = function () {
    window.setInterval(function () {
        var now = new Date();
        var clock = document.getElementById("clock");
        clock.innerHTML = now.toLocaleTimeString();
    }, 1000);
};

var lastRequests = saveLastRequestsParameters();



function checkBeforeSubmit() {

    document.getElementById("exceptionField").innerText = "";

    let rAllRight = checkIsRSelected();
    let xAllRight = checkIsXSelected();
    let yAllRight = checkYParameter();

    if (rAllRight && yAllRight) {
        addLastRequestsParameters();
        return true;
    } else {
        return false;
    }
}
function addLastRequestsParameters() {
    let input = document.createElement('input');
    let form = document.getElementById("submitForm");

    if (!(lastRequests === "")) {
        input.setAttribute('name', 'savedRequests');
        input.setAttribute('value', lastRequests);
        input.setAttribute('type', "hidden")
        form.appendChild(input);
    }
}

function saveLastRequestsParameters() {
    let inputValue = "";

    if (!(document.getElementById("requestAnswer") === null)) {
        let requestAnswer = document.getElementById("requestAnswer");
        let answerElements = requestAnswer.getElementsByClassName("answer");
        for (let answerElement of answerElements) {
            inputValue += answerElement.innerText + ",";
        }
        inputValue = inputValue.replace(/.$/, ";");
    }

    if (!(document.getElementById("savedRequestsTable") === null)) {
        let savedRequests = document.getElementById("savedRequestsTable").getElementsByClassName("request");
        for (let request of savedRequests) {
            let requestElements = request.getElementsByClassName("parameter");
            for (let element of requestElements) {
                console.log("parameter");
                inputValue += element.innerText + ",";
            }
            inputValue = inputValue.replace(/.$/, ";");
        }
        inputValue = inputValue.replace(/.$/, "");
    }
    if (inputValue.charAt(inputValue.length - 1) === ";") {
        inputValue = inputValue.replace(/.$/, "");
    }
    return inputValue;
}

function checkIsRSelected() {
    let rRadios = document.documentElement.getElementsByClassName("rRadio");
    let checked;
    for (let rRadio of rRadios) {
        if (rRadio.checked) {
            checked = true;
            break;
        }
    }
    document.getElementById("rTitle").classList.remove("selectedText");
    if (!checked) {
        let exceptionField = document.getElementById("exceptionField");
        exceptionField.innerText = exceptionField.innerText + "Необходимо выбрать параметр R \n";
        document.getElementById("rTitle").classList.add("selectedText");
        return false;
    } else {
        return true;
    }
}

function checkYParameter() {
    let yTextField = document.getElementById("yTextField");
    document.getElementById("yTitle").classList.remove("selectedText");
    if (yTextField.value === "") {
        let exceptionField = document.getElementById("exceptionField");
        exceptionField.innerText = exceptionField.innerText + "Необходимо задать параметр Y \n";
        document.getElementById("yTitle").classList.add("selectedText");

        return false;
    }

    if (isNaN(yTextField.value)) {
        let exceptionField = document.getElementById("exceptionField");
        exceptionField.innerText = exceptionField.innerText + "Координата Y должна быть числом \n ";
        document.getElementById("yTitle").classList.add("selectedText");
        return false;
    }
    if (! (-5 < parseFloat(yTextField.value) && parseFloat(yTextField.value) < 3)) {
        let exceptionField = document.getElementById("exceptionField");
        exceptionField.innerText = exceptionField.innerText + "Параметр Y должен быть в диапазоне (-5, 3) \n";
        document.getElementById("yTitle").classList.add("selectedText");
        return false;
    }
    return true;
}

function checkIsXSelected() {
    let xRadios = document.documentElement.getElementsByClassName("xClicked");
    let checked;
    for (let xRadio of xRadios) {
        if (xRadio.checked) {
            checked = true;
            break;
        }
    }
    document.getElementById("xTitle").classList.remove("selectedText");
    if (!checked) {
        let exceptionField = document.getElementById("exceptionField");
        exceptionField.innerText = exceptionField.innerText + "Необходимо выбрать параметр X \n";
        document.getElementById("xTitle").classList.add("selectedText");
        return false;
    } else {
        return true;
    }
}



