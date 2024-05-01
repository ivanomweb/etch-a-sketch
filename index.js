const board = document.querySelector(".board");
let boardSide = board.offsetWidth;
const slider = document.querySelector(".slider");
const sliderLabel = document.querySelector(".slider-label");
const resetBtn = document.querySelector(".reset");
sliderLabel.textContent = slider.value + " X " + slider.value;

function createBoard() {
  for (let i = slider.value ** 2; i > 0; i--) {
    let square = document.createElement("div");
    square.className = "squares";
    square.style.width = (boardSide - 2) / slider.value + "px";
    square.style.height = (boardSide - 2) / slider.value + "px";
    board.appendChild(square);
    square.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
    });
  }
}

function deleteBoard() {
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
}

createBoard();

slider.addEventListener("change", () => {
  sliderLabel.textContent = slider.value + " X " + slider.value;
  deleteBoard();
  createBoard();
});

resetBtn.addEventListener("click", () => {
  deleteBoard();
  createBoard();
});

console.log("Everyhting works");
