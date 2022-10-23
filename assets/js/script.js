const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const gameButtons = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;
let randomNumber;

gameButtons.forEach(gameButton => gameButton.addEventListener('click', (e) => {
    userChoice = e.target.id;
    playerChoiceDisplay.innerHTML = userChoice;
    playerChoiceDisplay.setAttribute("src", `assets/images/${e.target.id}-image.png`); // sets the images for players choice
    generateComputerChoice();
    getResult();

}));

function generateComputerChoice() {
    randomNumber = Math.floor(Math.random() * 5) + 1;
    if (randomNumber === 1) {
        computerChoice = 'rock';
        computerChoiceDisplay.setAttribute("src", "assets/images/rock-image.png"); // sets the image for computer choice
        computerChoiceDisplay.setAttribute("alt", "rock");
    }
    if (randomNumber === 2) {
        computerChoice = 'paper';
        computerChoiceDisplay.setAttribute("src", "assets/images/paper-image.png");
        computerChoiceDisplay.setAttribute("alt", "paper");
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors';
        computerChoiceDisplay.setAttribute("src", "assets/images/scissors-image.png");
        computerChoiceDisplay.setAttribute("alt", "scissors");
    }
    if (randomNumber === 4) {
        computerChoice = 'lizard';
        computerChoiceDisplay.setAttribute("src", "assets/images/lizard-image.png");
        computerChoiceDisplay.setAttribute("alt", "lizard");
    }
    if (randomNumber === 5) {
        computerChoice = 'spock';
        computerChoiceDisplay.setAttribute("src", "assets/images/spock-image.png");
        computerChoiceDisplay.setAttribute("alt", "spock");
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (userChoice === computerChoice) {
        result = "IT'S A DRAW";
    }

    // you chose rock outcomes

    if (userChoice === 'rock' && computerChoice === 'paper') {
        result = "Paper covers Rock<br>YOU LOSE";
        incrementComputerScore();
    }
    if (userChoice === 'rock' && computerChoice === 'scissors') {
        result = "Rock crushes Scissors<br>YOU WIN";
        incrementPlayerScore();
    }
    if (userChoice === 'rock' && computerChoice === 'lizard') {
        result = "Rock crushes Lizard<br>YOU WIN";
        incrementPlayerScore();
    }
    if (userChoice === 'rock' && computerChoice === 'spock') {
        result = "Spock vaporizes Rock<br>YOU LOSE";
        incrementComputerScore();
    }

    // you chose paper outcomes

    if (userChoice === 'paper' && computerChoice === 'rock') {
        result = "Paper covers Rock<br>YOU WIN";
        incrementPlayerScore();
    }
    if (userChoice === 'paper' && computerChoice === 'scissors') {
        result = "Scissors cuts Paper<br>YOU LOSE";
        incrementComputerScore();
    }
    if (userChoice === 'paper' && computerChoice === 'lizard') {
        result = "Lizard eats Paper<br>YOU LOSE";
        incrementComputerScore();
    }
    if (userChoice === 'paper' && computerChoice === 'spock') {
        result = "Paper disproves Spock<br>YOU WIN";
        incrementPlayerScore();
    }

    // you choose scissors outcomes

    if (userChoice === 'scissors' && computerChoice === 'rock') {
        result = "Rock crushes Scissors<br>YOU LOSE";
        incrementComputerScore();
    }
    if (userChoice === 'scissors' && computerChoice === 'paper') {
        result = "Scissors cuts Paper<br>YOU WIN";
        incrementPlayerScore();
    }
    if (userChoice === 'scissors' && computerChoice === 'lizard') {
        result = "Scissors decapitates Lizard<br>YOU WIN";
        incrementPlayerScore();
    }
    if (userChoice === 'scissors' && computerChoice === 'spock') {
        result = "Spock smashes Scissors<br>YOU LOSE";
        incrementComputerScore();
    }

    // you chose lizard outcomes

    if (userChoice === 'lizard' && computerChoice === 'rock') {
        result = "Rock crushes Lizard<br>YOU LOSE";
        incrementComputerScore();
    }
    if (userChoice === 'lizard' && computerChoice === 'paper') {
        result = "Lizard eats Paper<br>YOU WIN";
        incrementPlayerScore();
    }
    if (userChoice === 'lizard' && computerChoice === 'scissors') {
        result = "Scissors decapitates Lizard<br>YOU LOSE";
        incrementComputerScore();
    }
    if (userChoice === 'lizard' && computerChoice === 'spock') {
        result = "Lizard poisons Spock<br>YOU WIN";
        incrementPlayerScore();
    }

    // you choose spock outcomes

    if (userChoice === 'spock' && computerChoice === 'rock') {
        result = "Spock vaporizes Rock<br>YOU WIN";
        incrementPlayerScore();
    }
    if (userChoice === 'spock' && computerChoice === 'paper') {
        result = "Paper disproves Spock<br>YOU LOSE";
        incrementComputerScore();
    }
    if (userChoice === 'spock' && computerChoice === 'scissors') {
        result = "Spock smashes Scissors<br>YOU WIN";
        incrementPlayerScore();
    }
    if (userChoice === 'spock' && computerChoice === 'lizard') {
        result = "Lizard poisons Spock<br>YOU LOSE";
        incrementComputerScore();
    }
    resultDisplay.innerHTML = result;
}

//increment score for computer and player

function incrementPlayerScore() {
    let playerScore = parseInt(document.getElementById('player-score').innerText);
    document.getElementById('player-score').innerText = ++playerScore;
}

function incrementComputerScore() {
    let computerScore = parseInt(document.getElementById('computer-score').innerText);
    document.getElementById('computer-score').innerText = ++computerScore;
}