
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

let computerSelection = getComputerChoice();

let playerSelection = prompt("Please enter your choice").toLowerCase();

function playRound(playerSelection, computerSelection) {

    if (computerSelection === "Rock" && playerSelection === "scissors" || computerSelection === "Paper" && playerSelection === "rock" || computerSelection === "Scissors" && playerSelection === "paper") {
        return "You Lose! " + computerSelection + "beats " + playerSelection;
    }
    else if (computerSelection === "Rock" && playerSelection === "paper" || computerSelection === "Paper" && playerSelection === "scissors" || computerSelection === "Scissors" && playerSelection === "rock") {
        return "You Win! " + playerSelection + "beats " + computerSelection;
    }
    else {
        return "Its a tie!";
    }
    
};

// There is a problem with the playRound function where its returning a tie for all the games 