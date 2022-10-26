const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const gameButtons = document.querySelectorAll('button');
let userChoice;
let computerChoice = ['rock', 'paper', 'scissors', 'lizard', 'spock']
let result;
let randomNumber;

let playerScore = 0;
let computerScore = 0;



function checkIfPlayerWins(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        result = "IT'S A DRAW";
    }
}

function openGame() {
    window.location.href = "game.html"
}

function endGame() {
    window.location.href = "gameover.html"
}

gameButtons.forEach(gameButton => gameButton.addEventListener('click', (e) => {
    userChoice = e.target.id;
    playerChoiceDisplay.innerHTML = userChoice;
    playerChoiceDisplay.setAttribute("src", `assets/images/${e.target.id}-image.png`); // sets the images for players choice
    generateComputerChoice();
    getResult();

}));

function generateComputerChoice() {
    randomNumber = Math.floor(Math.random() * 5);
    computerChoiceDisplay.innerHTML = computerChoice[randomNumber]
    computerChoiceDisplay.setAttribute("src", `assets/images/${computerChoice[randomNumber]}-image.png`); // sets the image for computer choice
    computerChoiceDisplay.setAttribute("alt", `${computerChoice[randomNumber]}`); //sets alt text for image for computer choice

    // if (randomNumber === 1) {
    //     computerChoice = 'rock';

    // }
    // if (randomNumber === 2) {
    //     computerChoice = 'paper';
    //     computerChoiceDisplay.setAttribute("src", "assets/images/paper-image.png");
    //     computerChoiceDisplay.setAttribute("alt", "paper");
    // }
    // if (randomNumber === 3) {
    //     computerChoice = 'scissors';
    //     computerChoiceDisplay.setAttribute("src", "assets/images/scissors-image.png");
    //     computerChoiceDisplay.setAttribute("alt", "scissors");
    // }
    // if (randomNumber === 4) {
    //     computerChoice = 'lizard';
    //     computerChoiceDisplay.setAttribute("src", "assets/images/lizard-image.png");
    //     computerChoiceDisplay.setAttribute("alt", "lizard");
    // }
    // if (randomNumber === 5) {
    //     computerChoice = 'spock';
    //     computerChoiceDisplay.setAttribute("src", "assets/images/spock-image.png");
    //     computerChoiceDisplay.setAttribute("alt", "spock");
    // }
    // computerChoiceDisplay.innerHTML = computerChoice;
}

function getResultTwo() {
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

winnersAndLosers = {
    'rock': ['scissors', 'lizard'],
    'paper': ['rock', 'spock'],
    'scissors': ['paper', 'lizard'],
    'lizard': ['paper', 'spock'],
    'spock': ['scissors', 'rock'],
}

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        result = "IT'S A DRAW";
    }
    losers = winnerAndLosers.userChoice
    result = loserArray.includes(computerChoice)
    if (result == true) {
        return 'player wins'
    } 
    else {
        return 'computer wins'
    }
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

// game mode functions