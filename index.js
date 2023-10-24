
let randomNumber = (Math.floor(Math.random() * 3) + 1);
// Selects random number from 1 2 or 3 

function getComputerChoice(){
    if (randomNumber === 1){
        return "Rock";
    }
    else if (randomNumber === 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
};
// Assigns the number selected to one of the choices either Rock Paper or Scissors for the computer choice. 

function playRound(playerSelection, computerSelection) {

    if (computerSelection === "Rock" && playerSelection === "scissors" || computerSelection === "Paper" && playerSelection === "rock" || computerSelection === "Scissors" && playerSelection === "paper") {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    else if (computerSelection === "Rock" && playerSelection === "paper" || computerSelection === "Paper" && playerSelection === "scissors" || computerSelection === "Scissors" && playerSelection === "rock") {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
    else {
        return "Its a tie!";
    }  
};
// Plays one round of the game against computer


let computerSelection = getComputerChoice();

let playerSelection = prompt("Please enter your choice");

if (playerSelection !== null) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
     
    if (playerSelection !== 'Rock' && playerSelection !== 'Paper' && playerSelection !== 'Scissors') {
        alert("Invalid Input!");
    } else {
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
  } else { 
        alert("You didn't make a selection");
  };

// Makes sure the input is not empty
// Converts input into lower case
// checks whether input is different from rock paper or scissors provides error alert
// if it is rock paper or scissors begins game.
// If the input is empty provides error alert.






