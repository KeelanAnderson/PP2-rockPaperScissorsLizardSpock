let userChoice;
let computerChoice = ['rock', 'paper', 'scissors', 'lizard', 'spock']
let result;
let randomNumber;
const gameModes = ['best of three', 'best of five', 'first to ten', 'unlimited']

function checkIfPlayerWins(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        result = "IT'S A DRAW";
    }
}

function generateComputerChoice() {
    randomNumber = Math.floor(Math.random() * 5);
    computerChoiceDisplay.innerHTML = computerChoice[randomNumber]
    computerChoiceDisplay.setAttribute("src", `assets/images/${computerChoice[randomNumber]}-image.png`); // sets the image for computer choice
    computerChoiceDisplay.setAttribute("alt", `${computerChoice[randomNumber]}`); //sets alt text for image for computer choice
}

function generateComputerChoice() {
    if (randomNumber === 1) {
        computerChoice = 'rock';

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

winnersAndLosers = {
    'rock': ['scissors', 'lizard'],
    'paper': ['rock', 'spock'],
    'scissors': ['paper', 'lizard'],
    'lizard': ['paper', 'spock'],
    'spock': ['scissors', 'rock'],
}
playerChoiceDisplay.innerHTML = userChoice;
playerChoiceDisplay.setAttribute("src", `assets/images/${e.target.id}-image.png`); // sets the images for players choice

const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const gameButtons = document.querySelectorAll('[data-selection]');
const computerChoice = ['rock', 'paper', 'scissors', 'lizard', 'spock']
let userChoice;
let result;
let selection = document.getElementsByClassName('selection')
let randomNumber

let computerPick = computerChoiceDisplay.innerHTML
console.log(computerPick)

function openGame() {
    window.location.href = "game.html"
}

gameButtons.forEach(gameButton => gameButton.addEventListener('click', (e) => {
    userChoice = e.target.dataset;
    playerChoiceDisplay.innerHTML = userChoice;
    playerChoiceDisplay.setAttribute("src", `assets/images/${e.target.id}-image.png`); // sets the images for players choice
    generateComputerChoice();
    getResult();
    console.log(userChoice)
    

}));

function generateComputerChoice(randomNumber) {
    randomNumber = Math.floor(Math.random() * 5);
    computerChoiceDisplay.innerHTML = computerChoice[randomNumber]
    computerChoiceDisplay.setAttribute("src", `assets/images/${computerChoice[randomNumber]}-image.png`); // sets the image for computer choice
    computerChoiceDisplay.setAttribute("alt", `${computerChoice[randomNumber]}`); //sets alt text for image for computer choice
    console.log(computerChoice[randomNumber])
}
console.log(computerChoice[randomNumber])

// get results

const options = [
    {
        name: 'rock',
        img: 'rock-image.png',
        beats: ['lizard', 'scissors']
    },
    {
        name: 'paper',
        img: 'paper-image.png',
        beats: ['rock', 'spock']
    },
    {
        name: 'scissors',
        img: 'scissors-image.png',
        beats: ['lizard', 'paper']
    },
    {
        name: 'lizard',
        img: 'lizard-image.png',
        beats: ['paper', 'spock']
    },
    {
        name: 'spock',
        img: 'spock-image.png',
        beats: ['rock', 'scissors']
    },

]
computerChoice = generateComputerChoice(randomNumber)
console.log(options[computerChoice].beats)


function getResult(userChoice, computerChoice) {
    userChoice = gameButtons
    if (userChoice === computerChoice) {
        result = 'its a draw'
    }
    userChoice = options.find(() => options.name === computerPick)
    options.generateComputerChoice(randomNumber) = computerChoice
    console.log(computerChoice)
    if(losersArray.indexOf()){
       
        return 'player wins'
    }
    else{
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

function endGame() {
    window.location.href = "gameover.html"
}

// game mode functions