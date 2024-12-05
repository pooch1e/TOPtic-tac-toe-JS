//requires here?

import { Gameboard } from "../classes/board_1_try.js";
import { Player } from "../classes/player.js";

const board = new Gameboard();
const joel = new Player("X"); // Create Player 1 with symbol "X"
const player_2 = new Player("0");

//gameplay logic
joel.setMove(0, 0);
board.makeMove(joel);
board.printBoard();

player_2.setMove(1, 1);
board.makeMove(player_2);
board.printBoard();

joel.setMove(0, 1);
board.makeMove(joel);
board.printBoard();

player_2.setMove(2, 0);
board.makeMove(player_2);
board.printBoard();

joel.setMove(0, 2);
board.makeMove(joel);
board.printBoard();
board.gameEnd();



