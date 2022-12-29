//Global values
let humanScore = 0;
let computerScore = 0;
const computerSelection = getComputerChoice();


// Computer Generated Response
function getComputerChoice () {
   const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber==0) {
      return "rock";
    } else if (randomNumber==1) {
      return "scissors";
    } else if (randomNumber==2) {
      return "paper";
    } else {
      return "Error";
    } 
};

// One game playRound result
function playRound (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    return "It's a Tie!";
  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    humanScore++
    return "You Win! Rock beats Scissors!";
  } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    computerScore++
    return "You Lose! Rock beats Scissors!";
  } else if (playerSelection == 'rock' && computerSelection == 'paper') {
    computerScore++
    return "You Lose! Paper beats Rock!";
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    humanScore++
    return "You Win! Paper beats Rock!";
  } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    computerScore++
    return "You Lose! Scissors beats Paper!";
  } else if (playerSelection == 'scissors'&& computerSelection=='paper') {
    humanScore++
    return "You Win! Scissors beats Paper!";
  }
    
};

// loop for game to play 5 times
function game () {
 for (let i=0; i<5; i++);
 playRound();
playerSelection = prompt("pick your poison");
 
};


// Keep score and determine winner
function win() {
  if (humanScore == 5) {
    return "You Win!"
  } else if (computerScore ==5) {
    return "Computer Wins! Try Again!"
  } else 
    return "ERROR!"
};
