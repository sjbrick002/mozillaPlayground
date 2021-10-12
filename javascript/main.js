let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 0;
let resetButton;

function checkGuess() {
    console.log("hi");
    let userGuess = Number(guessField.value);
    if (guessCount === 0) {
        guesses.textContent = "Previous guesses: ";
    }

    guesses.textContent += userGuess + " ";

    if (userGuess === randomNumber) {
        lastResult.textContent = "Congrats! You got it right!";
        lowOrHi.textContent = "";
        setGameOver();
    } else if (guessCount === 9) {
        lastResult.textContent = "!!!GAME OVER!!!";
        lowOrHi.textContent = "";
        setGameOver();
    } else {
        lastResult.textContent = "Wrong!";
        if (userGuess < randomNumber) {
            lowOrHi.textContent = "Last guess was too low!";
        } else {
            lowOrHi.textContent = "Last guess was too high!";
        }
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button")
    resetButton.textContent = "Start new game";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame() {
    guessCount = 0;

    const resetParas = document.querySelectorAll(".resultParas p");
    for (let i = 0; i < resetParas.length; i ++) {
        resetParas[i].textContent = "";
        console.log[i];
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    randomNumber = Math.floor(Math.random() * 100) + 1;
}