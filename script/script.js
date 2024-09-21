const container = document.getElementById("container");
const wrongText = document.getElementById("wrong");
const rightWrong = [];
let timerState = false;

const mainTextContainer = document.getElementById("mainTextContainer");
const mainText = "MY NAME IS RAJIB I LIVE IN A VILLAGE I DO NOT LIKE FISH";
const pointer = document.createElement("span");
pointer.style.color = "cyan";
pointer.innerText = mainText[0];
container.appendChild(pointer);
mainTextContainer.innerText = mainText;

let cur = 0;
let total = mainText.length;
let wrong = 0;

document.addEventListener("keyup", function (event) {
  const pressed = event.key.toUpperCase();
  const childs = container.childNodes;

  container.removeChild(childs[childs.length - 1]);

  if (pressed == "BACKSPACE") {
    if (childs.length > 0) {
      container.removeChild(childs[childs.length - 1]);
      if (cur > 0) {
        cur -= 1;
        rightWrong.pop();
      }
    }
  } else if (pressed.length == 1) {
    if (!timerState) {
      timerState = true;
      timerId = setInterval(updateTimer, 1000);
    }
    let toAdd = document.createElement("span");
    toAdd.innerText = mainText[cur];
    toAdd.style.color = "white";
    if (pressed == mainText[cur]) {
      if (mainText[cur] == " ") {
        // let spaceRight = document.createElement("div");
        // spaceRight.style.width = "6px";
        // spaceRight.style.height = "20px";
        // spaceRight.style.display = "inline-block";
        // spaceRight.style.backgroundColor = "green";
        // toAdd = spaceRight;
        toAdd.style.backgroundColor = "green";
      } else {
        toAdd.style.color = "green";
      }
      rightWrong.push(0);
      //   toAdd.style.backgroundColor = "green";
    } else {
      if (mainText[cur] == " ") {
        // let spaceWrong = document.createElement("div");
        // spaceWrong.style.display = "inline-block";
        // spaceWrong.style.height = "20px";
        // spaceWrong.style.width = "6px";
        // spaceWrong.style.backgroundColor = "red";
        // toAdd = spaceWrong;
        toAdd.style.backgroundColor = "red";
      } else {
        toAdd.style.color = "red";

        //   toAdd.style.backgroundColor = "red";
        //toAdd.innerText = mainText[cur];
      }
      rightWrong.push(1);
    }

    cur += 1;
    container.appendChild(toAdd);
  }

  if (cur >= mainText.length) {
  }
  pointer.innerText = mainText[cur];
  if (mainText[cur] == " ") {
    const space = document.createElement("div");
    space.style.display = "inline-block";
    space.style.height = "20px";
    space.style.width = "8px";
    space.style.backgroundColor = "cyan";
    container.appendChild(space);
  } else {
    container.appendChild(pointer);
  }
});
