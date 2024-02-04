function myTimer() {
    var d = new Date();
    var day = d.getDate();
    day = (day < 10) ? '0' + day : day
    var month = d.getMonth() + 1;
    month = (month < 10) ? '0' + month : month
    var year = d.getFullYear() + '\n';
    document.getElementById("date").innerHTML = "Дата: " +  day + "." + month + "." + year;
    document.getElementById("clock").innerHTML = "Время: " + d.toLocaleTimeString();
}
setTimeout(myTimer, 0)
setInterval(myTimer, 10000) // обновление каждые 10 секунд