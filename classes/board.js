class Gameboard {
  constructor(board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]) { //creates board lines top left to bottom right 1-9
    this.board = board;

  }
  //create board
  printBoard() {
    console.log(" ");
      this.board.forEach((row) => {
      console.log(row.join("|"));
    });
  };


  //put things in the board

  makeMove(x, y, player) {
    if (this.board[x][y] === " ") { //check if space is empty
      this.board[x][y] = player; //place the move?
    } else {
      return false;
    }
  }

  //game states
  isBoardEmpty() {
    //check if any data is in board or if board is completely full
    const isEmpty = this.board.every((row) => {
      return row.every((cell) => cell === " ") //looping through row/col to check if empty
      
    });
    return isEmpty ? "Board is empty" : "Board has moves";

  }
    

  //have I won or lost?
  gameEnd() {
    //check cells for 3 in a row, take care of diagonals
    
    //this checks if board is full
    if (this.isBoardEmpty === true) {
      return "game over"
    }
  }
};

const board = new Gameboard();
board.printBoard(); //prints board to screen
for (let i = 0; i < 9; i ++) {
  board.makeMove(0, 0, "X") //top left corner
}


board.printBoard();
console.log(board.isBoardEmpty()); //check if anything on board
