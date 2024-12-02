//requires here?

import { Gameboard } from "../classes/board.js";
import { Player } from "../classes/player.js";

const board = new Gameboard();
const joel = new Player("X"); // Create Player 1 with symbol "X"
const player_2 = new Player("0");

//gameplay logic
player_2.setMove(0, 0); 
console.log(board.gameEnd());
board.makeMove(player_2);

player_2.setMove(0, 1);
board.gameEnd();
board.makeMove(player_2);
player_2.setMove(0, 2);
board.gameEnd();
board.makeMove(player_2);

board.printBoard(); 
console.log(board.gameEnd());


