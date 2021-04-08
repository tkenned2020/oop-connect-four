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
    turnSwitch.classList.remove("black");
    turnSwitch.classList.add("red");
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

  //   const turnSwitch = document.getElementById("click-targets");
  turnSwitch.addEventListener("click", (e) => {
    game.playInColumn();
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
