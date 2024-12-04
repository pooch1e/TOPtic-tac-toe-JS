

class Gameboard {
  constructor(board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]) { //creates board lines top left to bottom right 1-9
    this.board = board;
    
    
  }
  //create board in console
  printBoard() {
    console.log(" ");
      this.board.forEach((row) => {
      console.log(row.join("|"));
    });
  };


  //make move
  makeMove(player) {
    const { x, y, symbol } = player;

    const buttons = document.querySelectorAll(".button");
    
    buttons.forEach((button => {
      button.addEventListener("click", () => {
        const x = parseInt(button.getAttribute("data-x"));
        const y = parseInt(button.getAttribute("data-y"));

      });
    }));
  
    // Check if the space is empty
    if (this.board[x][y] === " ") {
      this.board[x][y] = symbol;  // Place the symbol at the coordinates
      this.textContent = symbol; //place symbol on screen
      console.log("Move placed successfully!");
      return true;
    } else {
      console.error("Invalid move! Space already occupied.");
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
    


  //have I won or lost?
  
   gameEnd() {
    //which player is saved in variable here
    // const { x, y, symbol } = player;
    const checkWin = (symbol) => {
      //check the rows are equal to player input
      const winRow = this.board.some((row) => {
        return row.every((cell) => cell === symbol)
      });
      //check cols for same
      const winCol = [0, 1, 2].some((col) => {
        return this.board.every((row) => row[col] === symbol)
      });

      const inDiagonal = this.board[0][0] === symbol && this.board[1][1] === symbol && this.board[2][2] === symbol;
      const ANTIinDiagonal = this.board[0][2] === symbol && this.board[1][1] === symbol && this.board[2][0] === symbol;

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

    //check for tie
    if (checkWin("X") === true && (checkWin("0") === false)) {
      console.log("Draw!")
    }
};
};


export {Gameboard};

