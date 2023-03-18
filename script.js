let playerChoice, computerChoice;
let plays = ["Rock", "Paper", "Scissors"];
let scoreP = 0, scoreC = 0;

function getComputerChoice() {
    return Math.floor(Math.random() * plays.length);
}


function playRound(playerChoice, computerChoice) {

    playerChoice = prompt("Enter your choice :", "rock/paper/scissors");
    computerChoice = plays[getComputerChoice()];

    let playerChoice1 = playerChoice.toUpperCase();
    let computerChoice1 = computerChoice.toUpperCase();

    if (playerChoice1 == computerChoice1) {
        return `Tied! ${playerChoice} neutralised ${computerChoice}`;
    }
    else if (playerChoice1 == "ROCK") {
        if (computerChoice1 == "SCISSORS") return `Won! ${playerChoice} beats ${computerChoice}`;
        else return `Lost! ${playerChoice} lost to ${computerChoice}`;
    }
    else if (playerChoice1 == "PAPER") {
        if (computerChoice1 == "ROCK") return `Won! ${playerChoice} beats ${computerChoice}`;
        else return `Lost! ${playerChoice} lost to ${computerChoice}`;
    }
    else {
        if (computerChoice1 == "PAPER") return `Won! ${playerChoice} beats ${computerChoice}`;
        else return `Lost! ${playerChoice} lost to ${computerChoice}`;
    }
}

function calcScore(string) {
    if (string.charAt(0) == "W") scoreP++;
    else if (string.charAt(0) == "L") scoreC++;
    else {
        scoreC++;
        scoreP++;
    }
}

function game() {
    for(let i = 0 ; i<5 ; i++){
        let message = playRound();
        alert(message);
        calcScore(message);
    }

    if(scoreP>scoreC) alert("You Won!");
    else if(scoreC>scoreP) alert("You Lost!");
    else alert("Game Tied!");
}

game();