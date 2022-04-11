// Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.

const computerSelection = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
   return computerSelection[Math.floor(Math.random() * computerSelection.length)]
}
computerPlay();

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

function playRound(playerSelection, computerSelection) {
   playerSelection = playerSelection.toLowerCase();
}
playRound();
