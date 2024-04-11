lastTwoTypes = [];
//code to manipulate the document object (DOM)
const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");
let board = new Board(ctx);

const moves = {
  [KEY.LEFT]: (p) =>({...p, x: p.x-1}),
  [KEY.RIGHT]: (p) =>({...p, x: p.x+1}),
  [KEY.DOWN]: (p) =>({...p, y: p.y+1}),
  [KEY.UP]: (p) =>board.rotate(p),
  [KEY.SPACE]: (p) =>({...p, y: p.y+1}),
}

//Calculate size of canvas from constants.
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

//Scale blocks
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);



function play() {
  board = new Board(ctx);



  let piece = new Piece(ctx);
  board.piece = piece;

  if(requestId){
    cancelAnimationFrame(requestId);
  }
  time.start = performance.now();
  animate();
}

let time = { start: 0, elapsed: 0, level: 1000};

function draw() {
  const { width, height } = ctx.canvas;
  ctx.clearRect(0, 0, width, height);

  board.piece.draw();
}

function animate(now = 0){
  //update elapsed time.
  time.elapsed = now - time.start;

  //if elapsed time has passed time for current level
  if(time.elapsed > time.level){
    time.start = now;

    drop();
  }

  //Clear the board before drawing new state.
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  board.piece.draw();
  requestId = requestAnimationFrame(animate);
}

function drop(){
  let p = moves[KEY.DOWN](this.piece);
  if(board.valid(p)){
    board.piece.move(p);
  }

}
document.addEventListener("keydown", event =>{
  event.preventDefault();

  if(moves[event.keyCode]){
    //Get new state of piece
    let p = moves[event.keyCode](board.piece);

    if(event.keyCode == KEY.SPACE){
      //Hard drop
      while(board.valid(p)){
        board.piece.move(p);
        p = moves[KEY.SPACE](board.piece);
      }
    }

    if(board.valid(p)) {
      board.piece.move(p);
    }

  }
});

