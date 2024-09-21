const timer = document.getElementById("timer");
let time = 0;
var timerId;
function updateTimer() {
  timer.innerText = "00:" + time;
  time++;
  if (time > 15) {
    time = 0;
    clearInterval(timerId);
    showSpeed();
  }
}

function showSpeed() {}
