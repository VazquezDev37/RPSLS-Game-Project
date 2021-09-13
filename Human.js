
const Player = require('./Player');
const prompt = require('prompt-sync')();

class Human extends Player
{
    constructor(){
        super();
        this.name = "Human";
        //unqiue to human
        //this.name = prompt? or method?
    }

    selectGesture(){
        let userInput = prompt(" What is your choice, for lizard press 1 \n. for spock press 2 \n. for paper press 3 \n. for rock press 4 \n. for scissors press 5 \n. ");
        switch(userInput){
            case '1':
             this.chosenGesture = "lizard"
            break;
            case '2': 
             this.chosenGesture = "spock"
            break;
            case '3': 
             this.chosenGesture = "paper"
             break;
       
             case '4': 
              this.chosenGesture = "rock"
             break;
       
             case '5': 
              this.chosenGesture = "scissors"
             break;

             default:
             break;
       
           }

           console.log(this.chosenGesture);


        
    }
}

//display the choices

//user input

//assign user input to this.chosenGesture


//let playerTest = new Human();
//playerTest.selectGesture();

module.exports = Human;



