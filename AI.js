const Player = require("./Player");

class AI extends Player{
    constructor(){
        super();
        this.name = "Computer";
    }

    selectGesture(){
        let rand = Math.floor(Math.random()* this.gestures.length);
        this.chosenGesture = this.gestures[rand];
    }
}

module.exports = AI;