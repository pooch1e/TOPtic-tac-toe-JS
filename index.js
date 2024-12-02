//requires here?

import { Gameboard } from "./classes/board.js";
import { Player } from "./classes/player.js";

const board = new Gameboard();
const joel = new Player("X"); // Create Player 1 with symbol "X"
const player_2 = new Player("0");

joel.setMove(0, 0); 
board.makeMove(joel);
player_2.setMove(0, 1);
board.makeMove(player_2);

board.printBoard(); 


