const Game = require('./Game');

let myGame = new Game();
myGame.rungame();


displayRules();{

    console.log("Welcome to the RPSLS Game!");
    console.log("At the same time, two players display one of the five symbols and then the results.");
    console.log("The first player to get two points first will win the game!");
  }



module.exports = Game;


