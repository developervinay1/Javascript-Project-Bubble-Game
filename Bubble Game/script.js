// Event Bubbling Concept: On click the event will be raised on particular element.If the event listener not found on element then it will search on parent and if not found then it will research on parent's parent component and the loop will continue until the event not found. This concept is called event bubbling.
var time = 60;
var score = 0;
var newHit = 0;

const increaseScore = () => {
  score += 10;
  document.getElementById("scoreValue").textContent = score;
};

const createBubble = () => {
  var clutter = "";

  for (var i = 1; i <= 234; i++) {
    var randomNumber = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randomNumber}</div>`;
  }

  document.querySelector("#panelBottom").innerHTML = clutter;
};

const timer = () => {
  setInterval(() => {
    if (time > 0) {
      time--;
      document.querySelector("#timer").textContent = time;
    } else {
      document.querySelector(
        "#panelBottom"
      ).innerHTML = `<h1 style="text-align: center; color: white;">Time Out</h1>`;
    }
  }, 1000);
};

const getNewHit = () => {
  newHit = Math.floor(Math.random() * 10);
  document.querySelector("#hitValue").textContent = newHit;
};

document
  .querySelector("#panelBottom")
  .addEventListener("click", function (detail) {
    var clickedNumber = Number(detail.target.textContent);

    if (clickedNumber === newHit) {
      increaseScore();
      createBubble();
      getNewHit();
    } else {
      document.querySelector(
        "#panelBottom"
      ).innerHTML = `<h1 style="text-align: center; color: white;">Game Over</h1>`;
    }
  });

createBubble();
timer();
getNewHit();
