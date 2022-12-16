// Global values
let humanScore = 0;
let computerScore = 0;
let winner = 0;
const computerSelection = getComputerChoice();
playerSelection = playerSelection.toLowerCase();
// computerChoice Generator
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
// one playround
function playRound (playerSelection, computerSelection) {
  
   if (playerSelection=='rock' && computerSelection=='paper') {
        return ('You Win! Rock beats Paper' , humanScore += 1);
    } else if (playerSelection=='paper' && computerSelection=='rock'){
        return ('You Lose! Rock beat Paper' , computerScore +=1);
    } else if (playerSelection=='rock' && computerSelection=='rock') {
        return "It's a Tie";
    } else if (playerSelection=='paper'&& computerSelection=='paper'){
        return "It's a Tie";
    } else if (playerSelection=='rock'&& computerSelection=='scissors'){
        return ("You Win! Rock beats Scissors", humanScore+=1);
    } else if (playerSelection=='scissors'&& computerSelection=='rock') {
        return ("You Lose! Rock beats Scissors", computerScore+=1);
    } else if (playerSelection=='scissors'&& computerSelection=='scissors') {
        return "It's a Tie";
    } else if (playerSelection=='paper'&& computerSelection=='scissors') {
        return ("You Lose! Scissors beats Paper", computerScore+=1);
    } else if (playerSelection=='scissors'&& computerSelection=='paper') {
        return ("You Win! Scissors beats Paper", humanScore+=1);
    } else {
      return "ERROR";
    }
};


function game() {

  while (humanScore <= 5 && computerScore <=5) {
    let playerSelection = prompt ('Pick your fighter');
    alert (playRound(playerSelection, computerSelection));
  }
  alert(win());
  
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
