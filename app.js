const board = document.querySelector("#board");
const SQUARES_NUMBER = 200;

const colors = [
  "rgb(242, 172, 172)",
  "rgb(245, 142, 142)",
  "rgb(250, 110, 110)",
  "rgb(247, 75, 75)",
  "rgb(251, 44, 44)",
  "rgb(242, 61, 118)",
  "rgb(253, 99, 148)",
  "rgba(184, 45, 89, 0.906)",
  "",
];
for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  board.append(square);

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 4px ${color}, 0 0 10px ${color}`;
}
function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 4px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
