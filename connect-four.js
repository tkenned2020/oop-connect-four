// const Player1 = token.red
// const Player2 = token.black

//create colunns array, 01, 20
//first chip would be col 0, row 6

import Game from "./game.js";

let game = undefined;

function updateUI() {
  const board = document.getElementById("board-holder");
  const gameName = document.getElementById("game-name");

  if (game === undefined) {
    board.classList.add("is-invisible");
  } else {
    board.classList.remove("is-invisible");
    gameName.innerHTML = game.getName();
  }
  const turnSwitch = document.getElementById("click-targets");
  let currentPlayer = game.playerTracker;
  if (currentPlayer === 1) {
    turnSwitch.classList.add("black");
    turnSwitch.classList.remove("red");
  } else if (currentPlayer === 2) {
    turnSwitch.classList.add("red");
    turnSwitch.classList.remove("black");
  }
  const squareRowCol = document.getElementById("square-row-col")
  for (let i = 0; i <= 5; i++) {
      let rowIDX = i
    for (let j = 0; j <= 6; j++) {
      let colIDX = j;
      
    }
  }

}

window.addEventListener("DOMContentLoaded", (e) => {
  const newGameBtn = document.getElementById("new-game");
  const player1Name = document.getElementById("player-1-name");
  const player2Name = document.getElementById("player-2-name");

  // still working on getting the button function to work
  const updateBtnStatus = function () {
    let player1Content = player1Name.value;
    let player2Content = player2Name.value;

    newGameBtn.disabled =
      player1Content.length === 0 || player2Content.length === 0;
  };

  player1Name.addEventListener("keyup", (event) => {
    updateBtnStatus();
  });

  player2Name.addEventListener("keyup", (event) => {
    updateBtnStatus();
  });

  newGameBtn.addEventListener("click", (e) => {
    game = new Game(player1Name.value, player2Name.value);
    player1Name.value = "";
    player2Name.value = "";
    updateBtnStatus();
    updateUI();
  });

  const turnSwitch = document.getElementById("click-targets");
  turnSwitch.addEventListener("click", (e) => {
    const targetID = event.target.id;
    if (!targetID.startsWith('column-')) return;

    let columnNumber = e.target.id.split("-")[1];
    // console.log(game.playerTracker)
    game.playInColumn(Number.parseInt(columnNumber));
    updateUI();
  });
});

// let columns = document.querySelectorAll(".click-target"); //get class from css
//     //should returns a node list
//     let tokens = document.querySelectorAll(".token-square");
//     columns.appendChild(tokens);

//     columns.addEventListener("click", (e) => {});

//     columns.forEach((column) => {
//         column = [];
//         if (column.length === 6) {
//             column.setAttribute("class", "click-target full");
//         }
//     });

// let blackChip = document.createElement("div");
// blackChip.setAttribute("class", "token black");

// let redChip = document.createElement("div");
// redChip.setAttribute("class", "token red");
