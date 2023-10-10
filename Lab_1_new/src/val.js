// главная функция, которая проверяет валидность введенных данных
function validateForm() {
    document.getElementById("error").innerText = "";
    let xChecked = xChecker();
    let yChecked = yChecker();
    let rChecked = rChecker();

    if(xChecked && yChecked && rChecked) {
        //добавить последние данные в табличку
        return true;
    }
    return false;

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