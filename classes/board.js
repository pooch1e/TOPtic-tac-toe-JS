// //GameBoard
// //  1. Manage Game State
// //  2. Check for win or ties
// //  3. Reset the board

// class GameBoard {
//   constructor(board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]) {
//     this.board = board;
    
//   }

//   printBoardforTest() {
//     console.log(`
//       ${this.board[0]}
//       ${this.board[1]}
//       ${this.board[2]}
//     `);
//   };

//   //1. Manage Game State
//   makeMove(player, x, y) { //will be X or O
//     const playerMove = player;
//     //check if space is empty
//     if (this.board[x][y] === " ") {
//       this.board[x][y] = playerMove; //place a move
//       console.log(`Made move at ${x}, ${y}`)
//     } else {
//       console.log("invalid move, input is already at this coordinate")
//     }
//   }

//   checkWin(player) {
    
    
//     if ((this.board[0][0] === player && this.board[0][1] === player && this.board [0][2] === player) //top row
//        || (this.board[1][0] === player && this.board[1][1] === player && this.board [1][2] === player) //middle row
//        || (this.board[2][0] === player && this.board[2][1] === player && this.board [2][2] === player) //bottom row
//        || (this.board[0][0] === player && this.board[1][1] === player && this.board [2][2] === player) //left diag
//        || (this.board[0][2] === player && this.board[1][1] === player && this.board [2][0] === player)) { //right diag
          
//       console.log("You win");
//       return true;
//     } else {
//       console.log("No win yet");
//     };

//   }; 


//     isDraw() {
//       // First check if anyone has won
//       if (this.checkWin('X') || this.checkWin('O')) {
//         return false; // Not a draw if someone won
//       }
      
//       // Then check if board is full
//       for (let i = 0; i < this.board.length; i++) {
//         for (let j = 0; j < this.board.length; j++) {
//           if (this.board[i][j] === " ") {
//             return false; // Found an empty space, not a draw
//           }
//         }
//       }
      
//       console.log("It's a draw!");
//       return true; // Board is full and no winner
//     };


//   resetBoard() {
//     for (let i = 0; i < this.board.length; i++) {
//       for (let j = 0; j < this.board.length; j++) {
//         this.board[i][j] = " ";
//       };
//     };
//     console.log("Board is reset");
//   };

// };

// const newGame = new GameBoard();
// //Top row test
// newGame.makeMove("X", 0, 0);
// newGame.makeMove("X", 0, 1);
// newGame.makeMove("O", 0, 2);

// //middle row test
// newGame.makeMove("O", 1, 0);
// newGame.makeMove("O", 1, 1);
// newGame.makeMove("X", 1, 2);

// //bottom row test
// newGame.makeMove("X", 2, 0);
// newGame.makeMove("O", 2, 1);
// newGame.makeMove("X", 2, 2);
// newGame.printBoardforTest();

// //check diag
// newGame.isDraw();

// newGame.resetBoard();
// newGame.printBoardforTest();

