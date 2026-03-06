const birthday = new Date("July 10, 2026 00:00:00").getTime();

setInterval(function(){

const now = new Date().getTime();

const gap = birthday - now;

const day = 1000 * 60 * 60 * 24;
const hour = 1000 * 60 * 60;
const minute = 1000 * 60;

document.getElementById("days").innerText = Math.floor(gap / day);
document.getElementById("hours").innerText = Math.floor((gap % day) / hour);
document.getElementById("minutes").innerText = Math.floor((gap % hour) / minute);
document.getElementById("seconds").innerText = Math.floor((gap % minute) / 1000);

},1000);


document.getElementById("openCard").onclick = function(){

document.getElementById("card").classList.remove("hidden")

}