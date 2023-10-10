// главная функция, которая проверяет валидность введенных данных
function validateForm() {
    document.getElementById("error").innerText = "";
    let xChecked = xChecker();
    let yChecked = yChecker();
    let rChecked = rChecker();

    if(xChecked && yChecked && rChecked) {
        addLast();
        return true;
    }
    return false;

}

var lastRequest = saveLastReq();

function addLast() {
    let input = document.createElement('input');
    let form = document.getElementById("subForm");

    if (!(lastRequest === "")) {
        input.setAttribute('name', 'savedRequests');
        input.setAttribute('value', lastRequest);
        input.setAttribute('type', 'hidden')
        form.appendChild(input);
    }
}

function saveLastReq(){
    let inputValue = "";

    if (!(document.getElementById("didHit") === null)) {
        let resultOfHitting = document.getElementById("didHit");
        let resultX = document.getElementById("xAnswer");
        let resultY = document.getElementById("yAnswer");
        let resultR = document.getElementById("rAnswer");
        let resultTime = document.getElementById("timeWas");
        let resultWorkTime = document.getElementById("workTime");

        inputValue += resultOfHitting.innerText + "," + resultX.innerText + "," +
            resultY.innerText + "," + resultR.innerText + "," + resultTime.innerText + "," +
            resultWorkTime.innerText + ",";
        inputValue = inputValue.replace(/.$/, ";");
    }

    if (!(document.getElementById("reqTable") === null)) {
        let savedRequests = document.getElementById("reqTable").getElementsByClassName("request");
        for (let req of savedRequests) {
            let reqEl = req.getElementsByClassName("parameter");
            for (let el of reqEl) {
                console.log("parameter");
                inputValue += el.innerText + ",";
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

function xChecker() {
    let chosen = false;

// ЭТО КОСТЫЛЬ(  НАВЕРНОЕ, ЭТО МОЖНО СДЕЛАТЬ ПО-УМНОМУ

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
        let error = document.getElementById("error");
        error.innerText = error.innerText + "¡Пожалуйста, выберите значение X! \n";
        return false;
    }
    return true;

}

function yChecker() {
    let yText = document.getElementById("yTextField");
    if (yText.value === "") {
        let error = document.getElementById("error");
        error.innerText = error.innerText + "¡Пожалуйста, укажите значение Y! \n";
        return false;
    }
    if (isNaN(yText.value)) {
        let error = document.getElementById("error");
        error.innerText = error.innerText + "¡Значение Y должно быть числом! \n"
        return false;
    }
    if ((yText.value <= -5) || (yText.value >= 3)) {
        let error = document.getElementById("error");
        error.innerText = error.innerText + "¡Значение Y должно принадлежать интервалу (-5, 3)! \n"
        return false;
    }
    return true;

}

function rChecker() {
    let rs = document.documentElement.getElementsByClassName("rRadio");
    let chosen = false;

    for (let r of rs) {
        if (r.checked) {
            chosen = true;
            break;
        }
    }

    if (!chosen) {
         let error = document.getElementById("error");
         error.innerText = error.innerText + "¡Пожалуйста, выберите значение R! \n";
        return false;
    }
    return true;


}