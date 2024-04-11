class Piece {
  constructor(ctx) {
    this.ctx = ctx;
    this.generateRandomPiece();

    //starting position
    this.x = 3;
    this.y = 0;
  }

  generateRandomPiece() {
    let typeId;
    do {
      typeId = this.randomizeTetrominoType(COLORS.length);
    } while (lastTwoTypes.includes(typeId));
    lastTwoTypes.push(typeId);
    lastTwoTypes.shift();

    this.color = COLORS[typeId];
    this.shape = SHAPES[typeId];
    console.log(this.color + this.shape);
  }

  //Drawing the tetromino on the canvas
  draw() {
    this.ctx.fillStyle = this.color;
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          //This method draw s a filled rectangle
          this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
        }
      });
    });
  }

  randomizeTetrominoType(noOfTypes) {
    return Math.floor(Math.random() * noOfTypes);
  }

  move(p){
    this.x = p.x;
    this.y = p.y;

    this.shape = p.shape;
  }

}
