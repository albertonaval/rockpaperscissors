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

for (let i = 0; i < 0; i++) {
let computerScore = 0;
  let playerScore = 0;
  if (playerSelection == 'win') {
    playerScore++;
  }
  if (computerSelection == 'win') {
    computerScore++;
  }
  else if (playerScore === '5' || computerScore === '5') {
    gameIsOver;
  }
}


// UI



