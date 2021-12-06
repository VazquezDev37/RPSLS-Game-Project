const Human = require("./human");
const AI = require ("./ai");
const prompt = require ("prompt-sync")();

class Game{
  constructor(){
      this.player1 = new Human();
      this.player2 = null
  }

    //Rules of the Game:
    rules(){

      console.log("Welcome to the RPSLS Game!");
      console.log("At the same time, two players display one of the five symbols and then the results.");
      console.log("Rock crushes Scissors. Scissors cuts Paper. Paper covers Rock. Rock crushes Lizard. Lizard poisons Spock. Spock smashes Scissors. Scissors decapitates Lizard. Lizard eats Paper Paper disproves. Spock Spock vaporizes Rock")
    }

    // PlayerOne = new Human();
    // Or playerTwo = New Human or new AI:
    choosePlayers(){
      let choice = prompt("Enter 1 to play with a Friend or 2 to play against the Computer ")
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

    //Display the Winner of the Game:
    printWinner(){
      if(this.player1.wins === 3){
          console.log(`${this.player1.name} wins the game!`)
      }
      else (this.player2.wins === 3)
          console.log(`${this.player2.name} wins the game!`)
  }

 
    // Battle Logic, Selecting the Game type:
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

    //Option to play again or exit the game:   
    playAgain (){

      let playOption = prompt ("Would you like to play again: press 1 for yes or press 2 for no");
        switch(playOption){
          case "1":
            playOption = this.runGame();
            break;
            case "2":
              console.log ("Have a Great Day");
              break;
              default:
        }
          }
   

      //Rungame:
      runGame(){
        this.rules();
        this.choosePlayers();
        this.printWinner();
        this.battle();     
        this.playAgain();
      }
         
}




 
module.exports = Game;



// Can be separate functions

// make determination playerTwo = New Human or new AI

//Rules method first thing 

//Select the game type 

//print winner

// Battle logic selectGesture

//play again

//rungame  