A COLUMN IS FULL

Conditional: when the column(s) length is equal to the total length of the column

Code to Run: Set the CSS class from "click-target" to "click-target full"

Description: This will it will make the click target disappear and change the cursor to the "Uh uh! You can't do that here!" icon.

Example Hard Code:
<div id="click-targets">
  <!-- Add the "full" class to any of these click targets -->
  <div id="column-0" class="click-target"></div>
  <div id="column-1" class="click-target full"></div>
  <div id="column-2" class="click-target"></div>
  <div id="column-3" class="click-target"></div>
  <div id="column-4" class="click-target"></div>
  <div id="column-5" class="click-target"></div>
  <div id="column-6" class="click-target"></div>
</div>

/////////////////////////////////////////////////////

INDICATING WHOSE TURN IT IS

Conditional:after a click on the C4 grid to place a checker; switch players by visually indicating a color change from black to red and vice versa.

Code to Run: add black or red class to the parent div with the "click targets" id.

Description: when its time to change turns, give an indication of that by having the click targets change color to black when you hover over them.

Example Hard Code:
<div id="click-targets" class="black">
  <div id="column-0" class="click-target"></div>
  <div id="column-1" class="click-target"></div>
  <div id="column-2" class="click-target"></div>
  <div id="column-3" class="click-target"></div>
  <div id="column-4" class="click-target"></div>
  <div id="column-5" class="click-target"></div>
  <div id="column-6" class="click-target"></div>
</div>

/////////////////////////////////////////////////////

PUTTING A TOKEN IN A SQUARE

Conditional:Select the square you want to place a token in, create a div, set class to: ("token black" or "token red"), append the created div to the element of that square. *The row/column are zero-based
(0-0, 0-1)*

Code to Run: create a function that will indicate which player is currently playing, create a div adn assign a clase='color-token', append that div to the element of that square which will place a token in that square, and then switch turns

Description: player on will make a selection to place their respective token, that square will be ocupied by that token and the cursor-hovoring will change to the other color indicating a turn change

Example Hard Code:
<div id="square-5-5" class="token-square">
  <div class="token black"></div>
</div>
<div id="square-5-6" class="token-square">
  <div class="token red"></div>
</div>

/////////////////////////////////////////////////////

CREATING A GAME

Conditional:Create game.js, export class Game,

Code to Run: create class Game, constuctor(playersName)
getName() {return string of p1 vs p2}

Description:

Example Hard Code:

/////////////////////////////////////////////////////

IN INDEX.HTML

Conditional:

Code to Run: add class="is-invisible" to element with id='board-holder'
add the 'disabled attr. to id=new-game

Description:

Example Hard Code:

/////////////////////////////////////////////////////

IN CONNECT-FOUR.JS

Conditional: top of the file; import game.js (import <what to import> from <module/file>)

Code to Run: declare variable game to undefined,
add event handler(doc.addE(DOM", CB)),
add event handler(id=player1name.doc.addE('keyup', CB))
inside {set button id=newgame 'disabled' prop to false if(both inputs for players are occupied, this will enable the newgame button) else {set disabled to true}}
Once done refactor the code

create event handler(id=newgame.doc.addE('click', CB))
inside{set glob var of game to a new instance of game(game = new Game...) that will take two players name, the default value of the name input will be (""), set the disabled property on id=newgame to true to disable it (prevent DRY Code with this functionality), lastly call a function updateUI()}

declare updateUI() after class Game and before doc.addE('DOM'), inside{if (game = undefined){add the class='is-invisible' to id='board-holder} else {remove the class='is-invisible' from id='board-holder and set id='game-name'.innerHTML = value returned by the getName()}}


Description:

Example Hard Code:

/////////////////////////////////////////////////////

PUTTING A TOKEN IN A SQUARE

Conditional:

Code to Run:

Description:

Example Hard Code:

/////////////////////////////////////////////////////

PUTTING A TOKEN IN A SQUARE

Conditional:

Code to Run:

Description:

Example Hard Code:

/////////////////////////////////////////////////////

PUTTING A TOKEN IN A SQUARE

Conditional:

Code to Run:

Description:

Example Hard Code:

/////////////////////////////////////////////////////

PUTTING A TOKEN IN A SQUARE

Conditional:

Code to Run:

Description:

Example Hard Code:

/////////////////////////////////////////////////////

PUTTING A TOKEN IN A SQUARE

Conditional:

Code to Run:

Description:

Example Hard Code:
