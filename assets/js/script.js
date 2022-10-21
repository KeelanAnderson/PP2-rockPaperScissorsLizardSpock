const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const gameButtons = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

gameButtons.forEach(gameButton => gameButton.addEventListener('click', (e) => {
    userChoice = e.target.id
    playerChoiceDisplay.innerHTML = userChoice
    console.log(gameButton)
    generateComputerChoice()
    getResult()

}))

function generateComputerChoice() {
    randomNumber = Math.floor(Math.random() * 5) + 1
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 4) {
        computerChoice = 'lizard'
    }
    if (randomNumber === 5) {
        computerChoice = 'spock'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (userChoice === computerChoice) {
        result = "IT'S A DRAW"
    }

    // you chose rock outcomes

    if (userChoice === 'rock' && computerChoice === 'paper') {
        result = "Paper covers Rock, YOU LOSE"
    }
    if (userChoice === 'rock' && computerChoice === 'scissors') {
        result = "Rock crushes Scissors, YOU WIN"
    }
    if (userChoice === 'rock' && computerChoice === 'lizard') {
        result = "Rock crushes Lizard, YOU WIN"
    }
    if (userChoice === 'rock' && computerChoice === 'spock') {
        result = "Spock vaporizes Rock, YOU LOSE"
    }

    // you chose paper outcomes

    if (userChoice === 'paper' && computerChoice === 'rock') {
        result = "Paper covers Rock, YOU Win"
    }
    if (userChoice === 'paper' && computerChoice === 'scissors') {
        result = "Scissors cuts Paper, YOU LOSE"
    }
    if (userChoice === 'paper' && computerChoice === 'lizard') {
        result = "Lizard eats Paper, YOU LOSE"
    }
    if (userChoice === 'paper' && computerChoice === 'spock') {
        result = "Paper disproves Spock, YOU WiN"
    }

    // you choose scissors outcomes

    if (userChoice === 'scissors' && computerChoice === 'rock') {
        result = "Rock crushes Scissors, YOU LOSE"
    }
    if (userChoice === 'scissors' && computerChoice === 'paper') {
        result = "Scissors cuts Paper, YOU WIN"
    }
    if (userChoice === 'scissors' && computerChoice === 'lizard') {
        result = "Scissors decapitates Lizard, YOU WIN"
    }
    if (userChoice === 'scissors' && computerChoice === 'spock') {
        result = "Spock smashes Scissors, YOU LOSE"
    }

    // you chose lizard outcomes

    if (userChoice === 'lizard' && computerChoice === 'rock') {
        result = "Rock crushes Lizard, YOU LOSE"
    }
    if (userChoice === 'lizard' && computerChoice === 'paper') {
        result = "Lizard eats Paper, YOU WIN"
    }
    if (userChoice === 'lizard' && computerChoice === 'scissors') {
        result = "Scissors decapitates Lizard, YOU LOSE"
    }
    if (userChoice === 'lizard' && computerChoice === 'spock') {
        result = "Lizard poisons Spock, YOU WIN"
    }

    // you choose spock outcomes

    if (userChoice === 'spock' && computerChoice === 'rock') {
        result = "Spock vaporizes Rock, YOU WIN"
    }
    if (userChoice === 'spock' && computerChoice === 'paper') {
        result = "Paper disproves Spock, YOU LOSE"
    }
    if (userChoice === 'spock' && computerChoice === 'scissors') {
        result = "Spock smashes Scissors, YOU WIN"
    }
    if (userChoice === 'spock' && computerChoice === 'lizard') {
        result = "Lizard poisons Spock, YOU LOSE"
    }
    resultDisplay.innerHTML = result
}