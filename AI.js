const Player = require("./player");


class AI extends Player{
    constructor(){
        super();
        this.name = "Computer";
    }


    selectGesture(){
        let rand = Math.floor(Math.random()* this.gestures.length);
        this.chosenGestures = this.gestures[rand];
    }
}



module.exports = AI;