class Player {
  constructor(symbol) { 
    this.x = null;
    this.y = null;
    this.symbol = symbol; //x or o
  }

  //put things in the board and do turn?

  setMove(x, y) {
    //need to redesign this to send a move
    this.x = x; //row coord this will be an index for the board array
    this.y = y; //col coord
}
}

export {Player};