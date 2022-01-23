var minutesTotal = 15 * 60;
var countDownDate = new Date(
  new Date().getTime() + minutesTotal * 1000
).getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var secondsLeft = ((distance % (1000 * 60 * 60)) / 1000 / minutesTotal) * 100;

  var minutesDisplay = minutes < 10 ? `0${minutes}` : minutes;
  var secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;

  document.getElementById("eta").innerHTML =
    minutesDisplay + ":" + secondsDisplay;
  document.getElementById("done").style.width = `${100 - secondsLeft}%`;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById(
      "eta"
    ).innerHTML = `<p style="color: #aa0000">Something went wrong! Please, try again later</p>`;
    document.getElementById("spinner").style.animation = "none";
  }
}, 1000);
