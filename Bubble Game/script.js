// Event Bubbling Concept

var time = 60;

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

createBubble();
timer();
