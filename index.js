//requires here?

import { Gameboard } from "./classes/board.js";
import { Player } from "./classes/player.js";

const board = new Gameboard();
const joel = new Player("X"); // Create Player 1 with symbol "X"

joel.setMove(0, 1); // Set Player 1's move at (0, 1)
board.makeMove(joel); // Place Player 1's move on the board
board.printBoard(); // Print the updated board

console.log(board);