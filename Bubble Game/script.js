// Event Bubbling Concept

const createBubble = () => {
  var clutter = "";

  for (var i = 1; i <= 234; i++) {
    var randomNumber = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randomNumber}</div>`;
  }

  document.querySelector("#panelBottom").innerHTML = clutter;
};

createBubble();
