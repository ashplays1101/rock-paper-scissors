//Declaring variables for the player's score, computer's score, and the win status.
let playerScore = -0;
let computerScore = 0;
let winStatus = null;

//Pick a random option from Rock, Paper, and Scissors. This is counted as the computer's turn.
function computerPlay() {
    let words = ["ROCK", "PAPER", "SCISSORS"];
    return words[Math.floor(Math.random()*words.length)];
}

//The function that represents one round of the game.
function playRound() {
    let ps = prompt("Type in your choice(Rock, Paper, Scissors)");
    //Both selections are turned into upper case to make it case insensitive.
    let playerSelection = ps.toUpperCase();
    let computerSelection = computerPlay();

    //Switch case to determine if the player wins, loses, or if it's a draw.
    switch (computerSelection + "-" + playerSelection) {
        case "ROCK-ROCK":
            winStatus = "draw";
            return "It's a draw!";
            break;
        case "PAPER-PAPER":
            winStatus = "draw";
            return "It's a draw!";
            break;
        case "SCISSORS-SCISSORS":
            winStatus = "draw";
            return "It's a draw!";
            break;
        case "ROCK-PAPER":
            winStatus = "win";
            return "You win! Paper beats Rock";
            break;
        case "PAPER-ROCK":
            winStatus = "lose";
            return "You lose! Paper beats Rock";
            break;
        case "ROCK-SCISSORS":
            winStatus = "lose";
            return "You lose! Rock beats Scissors";
            break;
        case "SCISSORS-ROCK":
            winStatus = "win";
            return "You win! Rock beats Scissors";
            break;
        case "PAPER-SCISSORS":
            winStatus = "win";
            return "You win! Scissors beat Paper";
            break;
        case "SCISSORS-PAPER":
            winStatus = "lose";
            return "You lose! Scissors beat Paper";
            break;
        default:
            return "Are you sure you entered the correct word?";
        }
    }

//This function calls the previous function 5 times, which counts as a single game.
function game() {
    //Initialize scores before each game
    playerScore = 0;
    computerScore = 0;

    //For loop that calls the playRound function 5 times. Also checks winStatus and increments playerScore or computerScore accordingly.
    for (var i = 0; i <= 4; i++) {
        console.log(playRound());
        if (winStatus === "win") {
            playerScore++;
        }
        else if (winStatus === "lose") {
            computerScore++;
        }
        else {
            ""
        }
    }

    //If statement chain to determine who won the game and to display the score.
    if (playerScore > computerScore) {
        return ("You won! Your score - " + playerScore + ". Computer's score - " + computerScore);
    }
    else if (playerScore < computerScore) {
        return ("You lost! Your score - " + playerScore + ". Computer's score - " + computerScore);
    }
    else if (playerScore === computerScore) {
        return ("It's a draw! Your score - " + playerScore + ". Computer's score - " + computerScore);
    }
    else {
        return;
    }
}

//Call the game function and display its output on the console.
console.log(game());

