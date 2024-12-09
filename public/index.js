// Board Class

//GameBoard
//  1. Manage Game State
//  2. Check for win or ties
//  3. Reset the board

class GameBoard {
  constructor(board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]) {
    this.board = board;
    
  }

  printBoardforTest() {
    console.log(`
      ${this.board[0]}
      ${this.board[1]}
      ${this.board[2]}
    `);
  };

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

  checkWin(player) {
    
    
    if ((this.board[0][0] === player && this.board[0][1] === player && this.board [0][2] === player) //top row
       || (this.board[1][0] === player && this.board[1][1] === player && this.board [1][2] === player) //middle row
       || (this.board[2][0] === player && this.board[2][1] === player && this.board [2][2] === player) //bottom row
       || (this.board[0][0] === player && this.board[1][1] === player && this.board [2][2] === player) //left diag
       || (this.board[0][2] === player && this.board[1][1] === player && this.board [2][0] === player)) { //right diag
          
      console.log("You win");
      return true;
    } else {
      console.log("No win yet");
    };

  }; 


    isDraw() {
      // First check if anyone has won
      if (this.checkWin('X') || this.checkWin('O')) {
        return false; // Not a draw if someone won
      }
      
      // Then check if board is full
      for (let i = 0; i < this.board.length; i++) {
        for (let j = 0; j < this.board.length; j++) {
          if (this.board[i][j] === " ") {
            return false; // Found an empty space, not a draw
          }
        }
      }
      
      console.log("It's a draw!");
      return true; // Board is full and no winner
    };


  resetBoard() {
  
    // Clear the board array
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board.length; j++) {
        this.board[i][j] = " ";
      }
    }
    
    // Clear all game buttons
    $(".button button").html(" "); // Clear the text inside all buttons
    console.log("Board is reset");
  
}

};

//game logic class

//hold logic for the gameplay in this object + DOM logic:
//  1. Handle Gameplay Loop
//  2. Track current player
//  3. Update Ui and reset Game

class Player {
  constructor() {
    this.currentPlayer = null;
    this.board = new GameBoard();
    this.gameActive = true;
    this.initResetButton();
  }

  initResetButton() {
    $("#reset").off("click").on("click", () => {
      this.board.resetBoard();
      this.whoIsPlaying();
      this.gameActive = true;
      console.log("Game is reset");
      
    })
  }
  whoIsPlaying() {
    let player = prompt("X or O").toUpperCase().trim();
    
    if (player !== "X" && player !== "O") {
        alert("Invalid input! Please enter X or O");
        return this.whoIsPlaying();
    }
    
    this.currentPlayer = player;
    return player;
  }

  renderPlayerMove() {
      const boardElement = $(".container");
      const buttonElement = $("button");
      
      $(buttonElement).on("click", (e) => {
        if (!this.gameActive) return;
        
        // Convert string attributes to integers
        const x = parseInt($(e.target).attr("data-x"));
         const y = parseInt($(e.target).attr("data-y"));
             


        
        // Only make move if space is empty
        if (this.board.board[x][y] === " ") {
          this.board.makeMove(this.currentPlayer, x, y);
          $(e.target).html(this.currentPlayer);
          
          if (this.board.checkWin(this.currentPlayer)) {
            alert(`Player ${this.currentPlayer} wins!`);
            this.gameActive = false;
            return;
          }
          
          if (this.board.isDraw()) {
            alert("Game is a draw!");
            this.gameActive = false;
            return;
          }
          
          // Switch players after valid move
          this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
        }
      });
  }
}

//gameplay loop


const player = new Player();
player.whoIsPlaying();
player.renderPlayerMove();
player.board.isDraw();


