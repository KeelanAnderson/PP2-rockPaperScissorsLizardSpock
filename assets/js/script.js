const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const gameButtons = document.querySelectorAll('button');
let userChoice;

gameButtons.forEach(gameButton => gameButton.addEventListener('click', (e) => {
    userChoice = e.target.id
    playerChoiceDisplay.innerHTML = userChoice 
    console.log(gameButton)
    generateComputerChoice()
    
}))

function generateComputerChoice() {

}