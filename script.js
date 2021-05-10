let playerScore = -0;
let computerScore = 0;
let winStatus = null;

function computerPlay() {
    let words = ["ROCK", "PAPER", "SCISSORS"];
    return words[Math.floor(Math.random()*words.length)];
}
function playRound() {
    let ps = prompt("Type in your choice(Rock, Paper, Scissors)");
    let playerSelection = ps.toUpperCase();
    let computerSelection = computerPlay();

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

function game() {
    playerScore = 0;
    computerScore = 0;

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

console.log(game());

