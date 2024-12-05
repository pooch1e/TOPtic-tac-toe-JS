//GameBoard
//  1. Manage Game State
//  2. Check for win or ties
//  3. Reset the board

class GameBoard {
  constructor(board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]) {
    this.board = board;
    
  }

  //1. Manage Game State
  makeMove(player, x, y) { //will be X or O
    const playerMove = player;
    //check if space is empty
    if (this.board[x][y] === " ") {
      this.board[x][y] = playerMove; //place a move
      console.log(`Made move at ${x}, ${y}`)
    } else {
      console.log("invalid move, input is already at this coordinate")
    }
  }

  checkWin() {
    // lets manually set win conditions then try and loop it
    // check top row
    if (this.board[0][0] === "X" && this.board[0][1] === "X" && this.board [0][2] === "X") {
      console.log("You win on Top Row");
    }
    //middle row
    if (this.board[1][0] === "X" && this.board[1][1] === "X" && this.board [1][2] === "X") {
      console.log("You win on middle row")
    }
    //bottom row
    if (this.board[2][0] === "X" && this.board[2][1] === "X" && this.board [2][2] === "X") {
      console.log("You win on bottom row")
    }
    //diagonal [0][0] -> [2][2]
    if (this.board[0][0] === "X" && this.board[1][1] === "X" && this.board [2][2] === "X") {
      console.log("You win left diag")
    }

    //anti diagonal
    if (this.board[0][2] === "X" && this.board[1][1] === "X" && this.board [2][0] === "X") {
      console.log("You win right Diag")
    }



  }


};

const newGame = new GameBoard();
//Top row test
newGame.makeMove("X", 0, 0);
newGame.makeMove("X", 0, 1);
newGame.makeMove("X", 0, 2);

//middle row test
newGame.makeMove("X", 1, 0);
newGame.makeMove("X", 1, 1);
newGame.makeMove("X", 1, 2);

//bottom row test
newGame.makeMove("X", 2, 0);
newGame.makeMove("X", 2, 1);
newGame.makeMove("X", 2, 2);

//check diag
newGame.checkWin();
