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

const game = require("./game.js")

let blackChip = document.createElement("div");
blackChip.setAttribute("class", "token black");

let redChip = document.createElement("div");
redChip.setAttribute("class", "token red");


window.addEventListener('DOMContentLoaded', event => {

    let columns = document.querySelectorAll(".click-target"); //get class from css
    //should returns a node list
    let tokens = document.querySelectorAll(".token-square");
        columns.appendChild(tokens);

        columns.addEventListener("click", (e) => {

        }); 
    
    columns.forEach(column => {
        column = [];
        if (column.length === 6) {
            column.setAttribute("class", "click-target full")
        }
    })




































































    
});
