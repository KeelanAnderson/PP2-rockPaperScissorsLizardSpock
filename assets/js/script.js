const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const gameButtons = document.querySelectorAll('[data-selection]');
let computerChoiceOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let userChoice;
let computerChoice;
let result;

/** opens game page */

function openGame() {
    window.location.href = "game.html";
}

/** opens Rules page */

function openRules() {
    window.location.href = "rules.html";
}

/** opens Menu page */

function openMenu() {
    window.location.href = "index.html";
}

/** this function will hide the game section and displays the gameover section */

function endGame() {
    let gameOn = document.getElementById('game-section');
    gameOn.hidden = true;
    let gameOver = document.getElementById('end-section');
    gameOver.classList.remove('hide');
}

/** 
 * This is the main game function.
 * It add evet listeners to all  the game buttons
 * when clicked displayes the image of the chosen button and calls the rest of the game functions
 */

gameButtons.forEach(gameButton => gameButton.addEventListener('click', (e) => {
    userChoice = e.target.dataset;
    playerChoiceDisplay.setAttribute("src", `assets/images/${e.target.id}-image.png`); // sets the images for players choice
    playerChoiceDisplay.setAttribute("alt", `${e.target.id}`); // sets the alt text for images for players choice
    getResult();
    bestOfFive();
}));

/** 
 * generates a random number between 0 - 4
 * this is used to pull a random computer choice from an array
 * its sets an image for that choice in computer choice display
 */

function generateComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 5);
    computerChoiceDisplay.innerHTML = computerChoiceOptions[randomNumber];
    computerChoiceDisplay.setAttribute("src", `assets/images/${computerChoiceOptions[randomNumber]}-image.png`); // sets the image for computer choice
    computerChoiceDisplay.setAttribute("alt", `${computerChoiceOptions[randomNumber]}`); //sets alt text for image for computer choice
    computerChoice = computerChoiceOptions[randomNumber];
}

const options = {
    'rock': ['scissors', 'lizard'],
    'paper': ['rock', 'spock'],
    'scissors': ['paper', 'lizard'],
    'lizard': ['paper', 'spock'],
    'spock': ['scissors', 'rock'],
};

/**
 * determines the result for each round
 * it also gives a point to the winner of the round
 */

function getResult() {
    generateComputerChoice();
    let beatenArray = options[userChoice.selection];
    let answer = beatenArray.includes(computerChoice);
    if (computerChoice == userChoice.selection) {
        result = "It's A Draw!";
    } else if (answer == true) {
        result = 'You Win!';
        incrementPlayerScore();
    } else if (answer == false) {
        result = 'You Lose!';
        incrementComputerScore();
    }
    resultDisplay.innerHTML = result;
}

/** increment score for computer and player */

function incrementPlayerScore() {
    let playerScore = parseInt(document.getElementById('player-score').innerText);
    document.getElementById('player-score').innerText = ++playerScore;
}

function incrementComputerScore() {
    let computerScore = parseInt(document.getElementById('computer-score').innerText);
    document.getElementById('computer-score').innerText = ++computerScore;
}

/** 
 * determines the winner of the overall game of best of five 
 * the first to win 3 rouns is the winner
 * calls to end game function to end the game
 * and provides information on who the winner is after the game
 */

function bestOfFive() {
    let gameResult = document.getElementById('game-result');
    if (document.getElementById('computer-score').innerText == 3) {
        gameResult.textContent = 'You Lost, Try Again!';
        endGame();

    } else if (document.getElementById('player-score').innerText == 3) {
        gameResult.textContent = 'Congatulations, You Won!';
        endGame();
    }

}