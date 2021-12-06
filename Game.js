const Human = require("./human");
const AI = require ("./ai");
const prompt = require ("prompt-sync")();

class Game{
  constructor(){
      this.player1 = new Human();
      this.player2 = null
  }

    displayRules(){

      console.log("Welcome to the RPSLS Game!");
      console.log("At the same time, two players display one of the five symbols and then the results.");
      console.log("The first player to get two points first will win the game!");
    }

    // playerOne = new Human();
    // make determination playerTwo = New Human or new AI
    choosePlayers(){
      let choice = prompt("Enter 1 to play with a friend or 2 to play against the computer ")
      switch(choice){
          case '1':
               this.player2 = new Human();
      break;
           case '2':
               this.player2 = new AI();
      break;
          default:
      break;
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

    

    battle(){

      while(this.player1.wins < 3 && this.player2.wins < 3){
          this.player1.selectGesture();
          this.player2.selectGesture();
      if(this.player1.chosenGestures === "0" && this.player2.chosenGestures === "2" ){
          console.log(`${this.player1.name} won this round`)
          this.player1.wins += 1
      }
      else if(this.player1.chosenGestures === "2" && this.player2.chosenGestures === "1" ){
          console.log(`${this.player1.name} won this round`)
          this.player1.wins += 1
      }
      else if(this.player1.chosenGestures === "1" && this.player2.chosenGestures === "0"){
          console.log(`${this.player1.name} won this round`)
          this.player1.wins += 1
          }
      else if(this.player1.chosenGestures === "0" && this.player2.chosenGestures === "3"){
          console.log(`${this.player1.name} won this round`)
          this.player1.wins += 1
          }
      else if(this.player1.chosenGestures === "3" && this.player2.chosenGestures === "4"){
          console.log(`${this.player1.name} won this round`)
          this.player1.wins += 1
          }
      else if(this.player1.chosenGestures === "4" && this.player2.chosenGestures === "2"){
          console.log(`${this.player1.name} won this round`)
          this.player1.wins += 1
          }
      else if(this.player1.chosenGestures === "2" && this.player2.chosenGestures === "3"){
          console.log(`${this.player1.name} won this round`)
          this.player1.wins += 1
          }
      else if(this.player1.chosenGestures === "3" && this.player2.chosenGestures === "1"){
          console.log(`${this.player1.name} won this round`)
          this.player1.wins += 1
          }
      else if(this.player1.chosenGestures === "1" && this.player2.chosenGestures === "4"){
          console.log(`${this.player1.name} won this round`)
          this.player1.wins += 1
          }
      else if(this.player1.chosenGestures === "4" && this.player2.chosenGestures === "0"){
          console.log(`${this.player1.name} won this round`)
          this.player1.wins += 1
          }
      else if(this.player1.chosenGestures === this.player2.chosenGestures){
          console.log("Tie game")
      }
          else{
              console.log(`${this.player2.name} won this round`)
      this.player2.wins += 1
          }
      }
  }

   // displayChoice();


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
   
           //rungame
      runGame(){
        this.rules();
        this.choosePlayers();
        this.battle();
        this.printWinner();
        this.playAgain();
      }
         
}




 
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