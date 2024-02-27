const canvas = document.querySelector(".canvas");



function drawGrid() {
  const row = 16;
  const col = 16;

  for (let i = 0; i < row; ++i) {
    for (let j = 0; j < col; ++j) {
      const gridBox = document.createElement("div");
      gridBox.className = "box";
      canvas.appendChild(gridBox);
    }
  }
}

drawGrid();
