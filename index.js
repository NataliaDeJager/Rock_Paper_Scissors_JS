
function getComputerChoice(){
    let randomNumber = (Math.floor(Math.random() * 3) + 1); // Selects random number from 1 2 or 3 

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

    if (computerSelection === "Rock" && playerSelection === "Scissors" || computerSelection === "Paper" && playerSelection === "Rock" || computerSelection === "Scissors" && playerSelection === "Paper") {
        return ["You Lose! " + computerSelection + " beats " + playerSelection, 0]; 
    }
    else if (computerSelection === "Rock" && playerSelection === "Paper" || computerSelection === "Paper" && playerSelection === "Scissors" || computerSelection === "Scissors" && playerSelection === "Rock") {
        return ["You Win! " + playerSelection + " beats " + computerSelection, 1];
    }
    else {
        return ["Its a tie!", 2];
    }  
};
// Plays one round of the game against computer
// returns arrays to obtain two different values

function game(){
    let computerScore = 0;
    let playerScore = 0;
    var i = 0;
    while (i < 5){ // Used while to avoid counting invalid inputs as rounds

        let computerSelection = getComputerChoice();

        let playerSelection = prompt("Please enter your choice");

        if (playerSelection !== null) {
            playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
            
            if (playerSelection !== 'Rock' && playerSelection !== 'Paper' && playerSelection !== 'Scissors') {
                alert("Invalid Input!");

            } else {
                console.log(computerSelection);
                let result = playRound(playerSelection, computerSelection);
                console.log(result[0]);
                i++;

                if (result[1] === 0){
                    computerScore++;

                } else if (result[1] === 1){
                    playerScore++;
                };
            }

        } else { 
                alert("You didn't make a selection");
        };
            }
// Makes sure the input is not empty
// Converts input into lower case
// checks whether input is different from rock paper or scissors provides error alert
// if it is rock paper or scissors begins game.
// If the input is empty provides error alert.
// stores results in result variable 
// adds the results of each round to computer and player scores

    if (computerScore < playerScore){
        alert("You Win!");
    } else if (computerScore > playerScore){
        alert("You Lose!");
    } else {
        alert("It's a Tie!")
    }
}
// checks who wins the match by comparing scores
game();







