
let randomNumber = (Math.floor(Math.random() * 3) + 1);


function getComputerChoice(){
    if (randomNumber === 1){
        console.log("Rock");
    }
    else if (randomNumber === 2) {
        console.log("Paper");
    }
    else {
        console.log("Scissors");
    }
};


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