//hold logic for the gameplay in this object + DOM logic:
//  1. Handle Gameplay Loop
//  2. Track current player
//  3. Update Ui and reset Game

class Gameplay {
  constructor(currentPlayer) {
    this.currentPlayer = currentPlayer;
    this.board = new GameBoard();
  }

  init() { //render board to screen
    const boardElement = $(".container"); //capture container for board
    const buttonElement = $("button"); //capture buttons
    // Add data-index to your buttons if not already in HTML
    buttonElement.each(function(index) {
      $(this).data('index', index);
    });

    buttonElement.on('click', (event) => {
      const clickedButton = $(event.target);
      const index = clickedButton.data('index');
      this.handleMove(index, clickedButton);
      console.log(event);
    });
  }

};

const myGame = new Gameplay();
myGame.init();