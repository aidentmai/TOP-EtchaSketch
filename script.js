const container = document.querySelector(".container");
const setGrid = document.querySelector("#set");
const clearGrid = document.querySelector("#clear");

setGrid.addEventListener("click", changeSize);
clearGrid.addEventListener("click", toggleClear);

function setColor(e) {
  e.target.style.backgroundColor = "black";
}

function drawGrid(size, eventFunction) {
  let gridSize = 768 / size;

  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let i = 0; i < size; i++) {
      let box = document.createElement("div");
      box.classList.add("box");
      box.style.height = gridSize + "px";
      box.style.width = gridSize + "px";
      box.addEventListener("mouseover", eventFunction);
      row.appendChild(box);
    }

    container.appendChild(row);
  }
}

function changeSize() {
  let size = prompt("Enter the size of your grid (Max: 100)");
  while ((size < 1) | (size > 100)) {
    size = prompt("Invalid size! Must be from 1-100");
  }
  remover();
  drawGrid(size, setColor);
}

function remover() {
  container.innerHTML = "";
}

function toggleClear() {
  let size = container.childElementCount;
  remover();
  drawGrid(size, setColor);
}

drawGrid(16, setColor);
