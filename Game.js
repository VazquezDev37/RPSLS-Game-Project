const Player = require("./Player");
const Human = require("./Human");
const AI = require("./AI");
const prompt = require ("prompt-sync")();

class Game {
    constructor() {
      this.playerOne = new Human("human");
      this.playerTwo = null;
  
    }

    displayRules(){

      console.log("Welcome to the RPSLS Game!");
      console.log("At the same time, two players display one of the five symbols and then the results.");
      console.log("The first player to get two points first will win the game!");
    }

    selectGameType(){
      let gameOption = prompt ("Select game: 1. Human vs. Human 2. Human vs. Computer")
      switch (gameOption){
        case "1":
          this.playerTwo = new Human ();
            break;
            case "2":
              this.playerTwo = new AI ();
              break;
              default:
      }
    }

    displayGameWinner() {
      if(this.playerOne.score > this.playerTwo.score) {
        console.log(this.playerOne.name + " wins this game!");
      }
      else {
        console.log(this.playerTwo.name + " wins this game!");
      }
    }

    runGame(){
      this.displayRules()
      this.selectGameType()
      this.getResult()
      
    }

    getResult (){

      let gameResult = prompt ("Choose your gesture: For lizard press 1, for spock press 2, for paper press 3, for rock press 4, for scissors press 5");

      
        if (this.playerOne.chosenGesture === this.playerTwo.chosenGesture){
       

        while (this.playerOne.wins < 3 && this.playerTwo.wins < 3) {
          this.playerOne.selectGesture();
          this.playerTwo.selectGesture();
          
          if (this.playerOne.selectGesture === "paper") {
              if (this.playerTwo.selectGesture === "rock") {
                  this.playerOne.wins ++;
              } else if (this.playerTwo.selectGesture === "scissors") {
                      this.playerTwo.wins ++;
                  }
          
                  else if(this.playerTwo.selectGesture ==="spock"){
                          this.playerOne.wins ++
                      }
                      else if(this.playerTwo.selectGesture === "lizard"){
                          this.playerTwo.wins ++
                        }
                      }
                  }
              }
                    if (this.playerOne.selectGesture === "rock") {
                    if (this.playerTwo.selectGesture === "paper") {
                       this.playerTwo.wins ++ 
                  }    else if (this.playerTwo.selectGesture === "scissors") {
                          this.playerOne.wins ++;
                      }
                  
            }
          }
          
    

    playAgain (){

      let playOption = prompt ("Would you like to play again: press 1 for yes or press 2 for no");
        switch(playOption){
          case "1":
            playOption = this.runGame();
            break;
            case "2":
              console.log ("Have a nice day");
              break;
              default:
        }
          }
                  
         
}


let gameTest = new Game();
gameTest.displayRules();
gameTest.selectGameType();
gameTest.getResult();
gameTest.displayGameWinner();
gameTest.playAgain();

 
module.exports = Game;



// Can be separate functions: *

// make determination playerTwo = New Human or new AI

//playerTwo.selectGesture() *

//Rules method first thing *

//Select the game type *


// Battle loop selectGesture, decide winner requirment met player1 or player2 get 2 win total

//print winner

//play again

//rungame  // method with console.log