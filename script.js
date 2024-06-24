let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//Create a new random secret target number at the start of each round.
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

//Determines which player wins based on which guess is closest to the target.
//If both guesses tie, human should win.
function compareGuesses(human, computer, target){
    (human < 0 || human > 9) && alert('The number you\'ve provided is out of range. Please enter a number between 0 and 9.');
    return Math.abs(human - target) <= Math.abs(computer-target) ? true : false;
}

//Update the score for the winner by 1.  Accepts 'human' or 'computer'.
function updateScore(winner) {
    winner == "human" ? humanScore += 1 : computerScore += 1;
}

//Update the round number after each round.
function advanceRound() {
    currentRoundNumber += 1;
}