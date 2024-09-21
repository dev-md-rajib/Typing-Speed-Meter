const timer = document.getElementById("timer");
const speed = document.getElementById("speed");
const childContainer = document.getElementById("container");
const rightWrong = [];
const mainText =
  "MY NAME IS RAJIB I LIVE IN A VILLAGE I DO NOT LIKE FISH I LIKE MURGI MY NAME IS RAJIB I LIVE IN A VILLAGE I DO NOT LIKE FISH I LIKE MURGI MY NAME IS RAJIB I LIVE IN A VILLAGE I DO NOT LIKE FISH I LIKE MURGI MY NAME IS RAJIB I LIVE IN A VILLAGE I DO NOT LIKE FISH I LIKE MURGI";
let time = 0;
let response = true;
var timerId;
function updateTimer() {
  timer.innerText = "00:" + time;
  time++;
  if (time >= 30) {
    time = 0;
    response = false;
    clearInterval(timerId);
    showSpeed();
  }
}

function showSpeed() {
  let words = mainText.slice(0, childContainer.childNodes.length).split(" ");
  let pre = 0;
  let totalWrong = 0;
  for (i = 0; i < words.length; i++) {
    let word = words[i];
    let startIndex = pre + i;
    let lastIndex = startIndex + word.length;
    let wrongChar = rightWrong
      .slice(startIndex, lastIndex)
      .reduce((total, cur) => total + cur, 0);
    if (wrongChar) {
      totalWrong++;
    }
    pre += word.length;
  }
  let totalRight = words.length - totalWrong;
  let accuracy = ((totalRight / words.length) * 100).toFixed(1);
  let speedWPM = Math.round(totalRight * (60 / 30));
  speed.style.display = "block";
  timer.style.display = "none";
  speed.innerText = "Accuracy: " + accuracy + " Speed: " + speedWPM + "wpm";

  console.log(
    "Word length:",
    words.length,
    "Total wrong: ",
    totalWrong,
    "Total right:",
    totalRight,
    "Accuracy: " + accuracy + " Speed: " + speedWPM + "wpm"
  );
}

function wordIndex(word) {}
