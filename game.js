class Game {
  constructor(name1, name2) {
    this.name1 = name1;
    this.name2 = name2;

    this.playerTracker = 1;

    //function playInColumn()
    playInColumn = () => {
      if ((this.playerTracker = 1)) {
        this.playerTracker = 2;
      } else if ((this.playerTracker = 2)) {
        this.playerTracker = 1;
      }
    };
  }
  getName() {
    return `Player 1: ${this.name1} vs Player 2: ${this.name2}`;
  }
}

export default Game;
