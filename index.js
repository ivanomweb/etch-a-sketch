const board = document.querySelector(".board");
let boardWidth = board.style.width;
let boardHeight = board.style.height;
const slider = document.querySelector(".slider");
const sliderLabel = document.querySelector(".slider-label");

slider.addEventListener("change", () => {
  sliderLabel.textContent = slider.getAttribute("value");
});

for (var i = 10000; i > 0; i--) {
  var square = document.createElement("div");
  square.className = "squares";
  square.style.width = "5px";
  square.style.height = "5px";
  board.appendChild(square);
  square.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black";
  });
}

console.log("Everyhting works");
