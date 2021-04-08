import Column from "./column.js";
//if you don't use the default keyword then you do need to destructure {}
// and variables have to be the same
// otherwise you can name anything

export default class Game {
  constructor(name1, name2) {
    this.name1 = name1;
    this.name2 = name2;
    this.columns = [
      new Column(),
      new Column(),
      new Column(),
      new Column(),
      new Column(),
      new Column(),
    ];
    this.playerTracker = 1;


  }
  getTokenAt(rowIDX, colIDX) {
    return this.columns[colIDX].getTokenAt(rowIDX);
  }

  playInColumn(columnNumber) {
    this.columns[columnNumber].add(this.playerTracker)
    if (this.playerTracker === 1) {
      this.playerTracker = 2;
    } else this.playerTracker = 1;
  }
  getName() {
    return `Player 1: ${this.name1} vs Player 2: ${this.name2}`;
  }
}

//accept the index num of where the click is

// export default { Game };
