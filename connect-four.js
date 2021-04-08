/*
Understanding:

* Create red & black player variables
* store the players moves in their array
Player 1 & 2 disable

list: create code indicate when col. is full
      indicating which turn for play by utilizing
      by using click-targets

putting a token in a square

Plan: when col. is full set class to 'full'
    on specific col.
    ex. when col.length === 6 set class to 'full'

    add black or red class to the div with the
    the 'click-targets" id

when placing token in square:
create div that will indicate what color and
then make this div the child of that square

Player turns utilize show and hide method

grab cols by class
let columns = document.querySelectorAll();

*/

// const Player1 = token.red
// const Player2 = token.black

import Game from "./game.js";
// let game = new Game
const newGameBtn = document.getElementById("new-game");
const player1Name = document.getElementById("player-1-name");
const player2Name = document.getElementById("player-2-name");

newGameBtn.addEventListener("click", (e) => {
    game = new Game(player1Name, player2Name)
    player1Name.value = '';
    player2Name.value = '';
    this.player1Name = player1Name;
    this.player2Name = player2Name;
    falseStatus.disabled = true;
    updateUI()
})

const board = document.getElementById("board-holder");

function updateUI() {
    if (game === undefined) {
        board.setAttribute("class", "is-invisible")
    } else {
        board.classList.remove("is-invisible")
        board.innerHTML = getName();
    }

}

let blackChip = document.createElement("div");
blackChip.setAttribute("class", "token black");

let redChip = document.createElement("div");
redChip.setAttribute("class", "token red");




// still working on getting the button function to work

const updateBtnStatus = function () {
    const falseStatus = document.getElementById("new-game");

    if ((player1Name.value !== "") && (player2Name.value !== "")) {
        falseStatus.disabled = false;
    }
}
player1Name.addEventListener("keyup", (event) => {
    updateBtnStatus()
});

player2Name.addEventListener("keyup", (event) => {
    updateBtnStatus()
});

// window.addEventListener("DOMContentLoaded", (e) => {
//     let columns = document.querySelectorAll(".click-target"); //get class from css
//     //should returns a node list
//     let tokens = document.querySelectorAll(".token-square");
//     columns.appendChild(tokens);

//     columns.addEventListener("click", (e) => { });

//     columns.forEach((column) => {
//         column = [];
//         if (column.length === 6) {
//             column.setAttribute("class", "click-target full");
//         }
//     });
// });
