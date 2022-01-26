
let date = new Date();
let utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
let timeOffset = 4;
var tbilisi = new Date(utcTime + (3600000 * timeOffset));

var minutes = date.getMinutes();
var hour = date.getHours();

console.log(minutes);
console.log(hour);

document.getElementById('hours').innerHTML = hour;
document.getElementById('min').innerHTML = minutes;

window.setTimeout(function () {
    window.location.reload();
  }, 1000);