function changeColorToYellow(id) {
  var arrow = document.getElementById(id);
  arrow.style.backgroundColor = "yellow";
}
function changeColorToOriginal(id) {
  var arrow = document.getElementById(id);
  arrow.style.backgroundColor = "";
}

document.getElementById("buttonNG").addEventListener("click", () => {
  location.reload();
});

// document.getElementById("arrow-left").addEventListener("click", () => {
//   changeColorToYellow("arrow-left");
//   slideLeft();
//   changeColorToOriginal("arrow-left");
// });

// document.getElementById("arrow-right").addEventListener("click", () => {
//   changeColorToYellow("arrow-right");
//   slideRight();
//   changeColorToOriginal("arrow-right");
// });

// document.getElementById("arrow-up").addEventListener("click", () => {
//   changeColorToYellow("arrow-up");
//   slideUp();
//   changeColorToOriginal("arrow-up");
// });

// document.getElementById("arrow-down").addEventListener("click", () => {
//   changeColorToYellow("arrow-down");
//   slideDown();
//   changeColorToOriginal("arrow-down");
// });

document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(e) {
  if (
    ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(
      e.code
    ) > -1
  ) {
    e.preventDefault();
  }
  let direction = "";
  switch (e.code) {
    case "ArrowLeft":
      direction = "left";
      break;
    case "ArrowRight":
      direction = "right";
      break;
    case "ArrowUp":
      direction = "up";
      break;
    case "ArrowDown":
      direction = "down";
      break;
    default:
      return;
  }

  changeColorToYellow("arrow-" + direction);
  move(direction);

  setTimeout(() => changeColorToOriginal("arrow-" + direction), 300);

  document.getElementById("score").innerText = score;

  document.getElementById("score").classList.add("score-animated");

  setTimeout(() => {
    document.getElementById("score").classList.remove("score-animated");
  }, 500);
}

function move(direction) {
  switch (direction) {
    case "left":
      slideLeft();
      break;
    case "right":
      slideRight();
      break;
    case "up":
      slideUp();
      break;
    case "down":
      slideDown();
      break;
  }
}

function filterZero(row) {
  return row.filter((num) => num != 0);
}

function slide(row) {
  row = filterZero(row);

  for (let i = 0; i < row.length - 1; i++) {
    if (row[i] == row[i + 1]) {
      row[i] *= 2;
      row[i + 1] = 0;
      score += row[i];
    }
  }

  row = filterZero(row);

  while (row.length < rows) {
    row.push(0);
  }
  return row;
}

function slideLeft() {
  for (let r = 0; r < rows; r++) {
    let = row = board[r];
    row = slide(row);
    board[r] = row;

    for (let c = 0; c < columns; c++) {
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
  setTimeout(setTwo(), 500);
}
function slideRight() {
  for (let r = 0; r < rows; r++) {
    let row = board[r];
    row.reverse();
    row = slide(row);
    row.reverse();
    board[r] = row;

    for (let c = 0; c < columns; c++) {
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
  setTimeout(setTwo(), 500);
}

function slideUp() {
  for (let c = 0; c < columns; c++) {
    let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
    row = slide(row);
    board[0][c] = row[0];
    board[1][c] = row[1];
    board[2][c] = row[2];
    board[3][c] = row[3];
    for (let r = 0; r < rows; r++) {
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
  setTimeout(setTwo(), 500);
}
function slideDown() {
  for (let c = 0; c < columns; c++) {
    let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
    row.reverse();
    row = slide(row);
    row.reverse();
    board[0][c] = row[0];
    board[1][c] = row[1];
    board[2][c] = row[2];
    board[3][c] = row[3];
    for (let r = 0; r < rows; r++) {
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
  setTimeout(setTwo(), 500);
}
