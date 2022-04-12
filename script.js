// Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.

let computerSelection = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
   return computerSelection[Math.floor(Math.random() * computerSelection.length)]
}
computerPlay();

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

let playerSelection = 'Paper';
computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    return 'You win !! Paper beats Rock';
  } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
    return 'You and the computer are tie !! Play again for more fun';
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    return 'You Lose !! Scissors beats Paper';
  } else {
    return 'Play another round';
  }
}

console.log(playRound(playerSelection, computerSelection));


// Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
// let computerScore = 0;
// let playerScore = 0;

// function game() {
//   playRound();
//   for (let i = 0; i < 5; i++) {

//   }

// }







//playerSelection = 'Rock';
//computerSelection = computerPlay();

// //function playRound(playerSelection, computerSelection) {
//   if (playerSelection === 'Rock' && computerSelection === 'Rock') {
//     return 'You and the computer are tie !! Play again for more fun';
//   } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
//     return 'You Lose !! Paper beats Rock';
//   } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
//     return 'You Win!! Scissors beats Rock';
//   } else {
//     return 'Play another round';
//   }
// }
