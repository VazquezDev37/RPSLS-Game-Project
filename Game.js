

class Game {
    constructor() {
      this.playerOne = new Player("human");
      this.playerTwo = new Player("AI");
  
    }

}

displayGameWinner(); {
  if(this.playerOne.score > this.playerTwo.score) {
    console.log(this.playerOne.name + " wins this game!");
  }
  else {
    console.log(this.playerTwo.name + " wins this game!");
  }
}


module.exports = Game;



// Can be separate functions: *

// make determination playerTwo = New Human or new AI

//playerTwo.selectGesture() *

//Rules method first thing

//Select the game type 


// Battle loop selectGesture, decide winner requirment met player1 or player2 get 2 win total

//print winner

//play again

//rungame  // method with console.log