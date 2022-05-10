// Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.

let computerSelection = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
   return computerSelection[Math.floor(Math.random() * computerSelection.length)]
}
computerPlay();

let playerSelection = prompt("What is your choice between Rock, Paper and Scissors?")
computerSelection = computerPlay();



function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
      return 'You and the computer are tie !! Play again for more fun';
    } if (playerSelection === 'Paper' && computerSelection === 'Rock') {
      playerSelection == "win" && playerScore++
      return "You win! Paper covers Rock";
    } if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
      computerSelection == 'win' && computerScore++
      return 'You Lose !! Scissors cuts Paper';
    } if (playerSelection === 'Rock' && computerSelection === 'Paper') {
      computerSelection == 'win' && computerScore++
      return 'You Lose !! Paper covers Rock';
    } if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
      playerSelection == 'win' && playerScore++
      return 'You win !! Rock crushes Scissors';
    } if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
      computerSelection == 'win' && computerScore++
      return 'You Lose !! Rock crushes Scissors';
    } if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
      playerSelection == 'win' && playerScore++
      return 'You Win !! Scissors cuts Paper';
    } else { return 'Play another round for more fun!!' }
  }
  alert(playRound(playerSelection, computerSelection));

// for (let i = 0; i < 0; i++) {
// let computerScore = 0;
// let playerScore = 0;
// }
//   function gameIsOver() {
//     playerScore === '5' || computerScore === '5';
//   }

// UI
// In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.

//     For now, remove the logic that plays exactly five rounds.
//     Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
//     Add a div for displaying results and change all of your console.logs into DOM methods.
//     Display the running score, and announce a winner of the game once one player reaches 5 points.

