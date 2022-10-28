const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const gameButtons = document.querySelectorAll('[data-selection]');
const computerChoice = ['rock', 'paper', 'scissors', 'lizard', 'spock']
let userChoice;
let result;
let selection = document.getElementsByClassName('selection')

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

function generateComputerChoice() {
    randomNumber = Math.floor(Math.random() * computerChoice.length);
    computerChoiceDisplay.innerHTML = computerChoice[randomNumber]
    computerChoiceDisplay.setAttribute("src", `assets/images/${computerChoice[randomNumber]}-image.png`); // sets the image for computer choice
    computerChoiceDisplay.setAttribute("alt", `${computerChoice[randomNumber]}`); //sets alt text for image for computer choice
}

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

function getResult(userChoice, computerChoice) {
    userChoice = gameButtons
    if (userChoice === computerChoice) {
        result = 'its a draw'
    }
    userChoice = options.find(() => options.name === computerChoice)
    console.log(userChoice)
    if()

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