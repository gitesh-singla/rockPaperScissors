let playerChoice, computerChoice;
let plays = ["Rock", "Paper", "Scissors"];
let scoreP = 0, scoreC = 0;

function getComputerChoice() {
    return Math.floor(Math.random() * plays.length);
}

const buttons = document.querySelectorAll(".choice");
buttons.forEach(button => {
    button.addEventListener('click' , buttonClick)
});

function buttonClick(e){
    const button = e.target;
    playerChoice = plays[button.value];
    game(playerChoice);
}

function playRound(playerChoice) {

    computerChoice = plays[getComputerChoice()];
    let playerChoice1 = playerChoice.toUpperCase();
    let computerChoice1 = computerChoice.toUpperCase();


    if (playerChoice1 == computerChoice1) {
        return  `Tied! ${playerChoice} neutralised ${computerChoice}`;
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
        if (computerChoice1 == "PAPER") return `Won! ${playerChoice} beat ${computerChoice}`;
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

function notifier(string){
    const notification = document.querySelector(".notification");
    notification.textContent = string;

    if(string.charAt(0) == 'W') notification.style.backgroundColor = "rgba(100, 255, 120, 0.5)";
    else if(string.charAt(0) == 'L') notification.style.backgroundColor = "rgba(157, 0, 39, 0.5)";
    else if(string.charAt(0) == 'T') notification.style.backgroundColor = "rgba(255, 240, 34, 0.5)"
    else notification.style.backgroundColor = "";
}

function scoreKeeper(){
    const pScore = document.querySelector(".pScore");
    pScore.textContent = scoreP;
    const cScore = document.querySelector(".cScore");
    cScore.textContent = scoreC;
}

function game(playerChoice) {
    string = playRound(playerChoice)
    calcScore(string);

    notifier(string);
    scoreKeeper();

    if(scoreC == 5 || scoreP == 5){
        if(scoreC>scoreP) notifier("Lost! Computer takes the win.");
        else if(scoreP>scoreC) notifier("Won! Computer takes the L.")
        else notifier("Tied! Atleast you didn't lose.")

        scoreC = scoreP = 0;
        scoreKeeper();
        // notifier("Play Again!");
    }
}
