let playerChoice , computerChoice;
let plays = ["rock" , "paper" , "scissors"];

function getComputerChoice(){
    return Math.floor(Math.random() * plays.length);
}

playerChoice = prompt("Enter your choice :");
computerChoice = plays[getComputerChoice()];

function playRound (playerChoice , computerChoice){
    playerChoice = playerChoice.toUpperCase();
    computerChoice  = computerChoice.toUpperCase();

    if(playerChoice == computerChoice){
        console.log("Round Tied!");
    }
    else if(playerChoice == "ROCK"){
        computerChoice == "SCISSORS" ? console.log("Round Win!") : console.log("Round Lost!");
    }
    else if(playerChoice == "PAPER"){
        computerChoice == "ROCK" ? console.log("Round Win!") : console.log("Round Lost!");
    }
    else {
        computerChoice == "PAPER" ? console.log("Round Win!") : console.log("Round Lost!");
    }
}

