/*function clock() {
    let date = new Date(),
        hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
        seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds()

    document.getElementById('clock').innerText = hours + ":" +
        minutes + ":" + seconds
}
setTimeout(clock, 0)
setInterval(clock, 10000)

 */
var myVar = setInterval(function() {
    myTimer();
}, 10000);

function myTimer() {
    var d = new Date();
    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}