let computerChoice;
let playerChoice;

function computerPlay() {
    const randomNumber = Math.random() * 30;
    
    if (randomNumber > 20) {
        computerChoice = "rock";
        console.log(`Your opponent chose ${computerChoice}!`);
    } else if (randomNumber > 10) {
        computerChoice = "paper";
        console.log(`Your opponent chose ${computerChoice}!`);
    } else {
        computerChoice = "scissors";
        console.log(`Your opponent chose ${computerChoice}!`);
    }
}

function renderResults() {
    if (playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors" || playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock" || playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper") {
        console.log("You win!!!");
    } else if (playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper" || playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors" || playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock") {
        console.log("You lose!!!");
    } else {
        console.log("Wow! You and your opponent both tied!");
    }
} 

function playAgain() {
    let rematch = "";
    rematch = prompt("Want to play again?", "Y/N");
    if (rematch.toUpperCase() === "Y") {
        rematch = "";
        playGame();
    }
}

function playGame() {
    playerChoice = prompt("Let's play rock, paper, scissors! Enter your choice below: ", "Choose rock, paper, or scissors");
    console.log(`You chose ${playerChoice}!`);
    computerPlay();
    renderResults();
    playAgain();
}