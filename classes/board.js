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
    return isEmpty ? true : false

  }
    
  //player turn - how will player object interact? or how to know who's turn it is?
  playerTurn() {
    const player_1 = 0;
    const player_2 = 0;
    
  }

  //have I won or lost?
  gameEnd() {
    //which player is saved in variable here
    const checkWin = (player) => {
      //check the rows are equal to player input
      const winRow = this.board.some((row) => {
        row.every((cell) => cell == player)
      });
      //check cols for same
      const winCol = [0, 1, 2].some((col) => {
        this.board.every((row) => row[col] === player)
      });

      const inDiagonal = this.board[0][0] === player && this.board[1][1] === player && this.board[2][2] === player;
      const ANTIinDiagonal = this.board[0][2] === player && this.board[1][1] === player && this.board[2][0] === player;

      return winRow || winCol || inDiagonal || ANTIinDiagonal;
    };

    //check if player won
    if (checkWin("X")) {
      console.log("You Won");
      return true;
    } 

    //check comp won
    if (checkWin("0")) {
      console.log("You Lost");
      return false;
    } 
};
};






let board = new Gameboard();
for (let i = 0; i < 3; i ++) { //quickly fill board with moves
  for (let j = 0; j< 3; j++) {
    board.makeMove(i, j, "X") //top left corner
  }
  
}
board.printBoard(); //prints board to screen
// console.log(board.gameEnd()); //check if anything on board
board.gameEnd();