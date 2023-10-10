// главная функция, которая проверяет валидность введенных данных
function validateForm() {
    document.getElementById("error").innerText = "AAAA";
    let xChecked = xChecker();
    let yChecked = yChecker();
    let rChecked = rChecker();
    return false;

}

function xChecker() {

}

function yChecker() {

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
       /* let error = document.getElementById("error");
        error.innerText = error.innerText + "Выберите значение R \n";

        */
        alert("Выберите значение R \\n");
        var e = "Выберите значение R \\n";
        document.getElementById("error").innerHTML = e;

        return false;
    }
    return true;
}