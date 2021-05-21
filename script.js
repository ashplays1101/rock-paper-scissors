//Declaring variables for the player's score, computer's score, and the win status.
let playerScore = 0;
let computerScore = 0;
let winStatus = null;

//Pick a random option from Rock, Paper, and Scissors. This is counted as the computer's turn.
function computerPlay() {
    let words = ["ROCK", "PAPER", "SCISSORS"];
    return words[Math.floor(Math.random()*words.length)];
}

//The function that represents one round of the game.
function playRound() {;
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
            playerScore++;
            return "You win! Paper beats Rock";
            break;
        case "PAPER-ROCK":
            winStatus = "lose";
            computerScore++;
            return "You lose! Paper beats Rock";
            break;
        case "ROCK-SCISSORS":
            winStatus = "lose";
            computerScore++;
            return "You lose! Rock beats Scissors";
            break;
        case "SCISSORS-ROCK":
            winStatus = "win";
            playerScore++;
            return "You win! Rock beats Scissors";
            break;
        case "PAPER-SCISSORS":
            winStatus = "win";
            playerScore++
            return "You win! Scissors beat Paper";
            break;
        case "SCISSORS-PAPER":
            winStatus = "lose";
            computerScore++;
            return "You lose! Scissors beat Paper";
            break;
        default:
            return "Are you sure you entered the correct word?";
        }
    }

//Function to reset the game after one round is over.
function clearText() {
    document.getElementById('player').innerText = "0";
    document.getElementById('computer').innerText = "0";
    playerScore = 0;
    computerScore = 0;
    winStatus = null;
    document.getElementById('info').innerText = "";
    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');
    rock.setAttribute('onclick', 'rock()');
    paper.setAttribute('onclick', 'paper()');
    scissors.setAttribute('onclick', 'scissors()');
}

//Function tied to the button corresponding to 'Rock'
function rock() {
    ps = 'rock';
    let result = playRound();
    document.getElementById('info').innerText = result;
    document.getElementById('player').innerText = playerScore;
    document.getElementById('computer').innerText = computerScore;
    win();
}

//Function tied to the button corresponding to 'Paper'
function paper() {
    ps = 'paper';
    let result = playRound();
    document.getElementById('info').innerText = result;
    document.getElementById('player').innerText = playerScore;
    document.getElementById('computer').innerText = computerScore;
    win();
}

//Function tied to the button corresponding to 'Scissors'
function scissors() {
    ps = 'scissors';
    let result = playRound();
    document.getElementById('info').innerText = result;
    document.getElementById('player').innerText = playerScore;
    document.getElementById('computer').innerText = computerScore;
    win();
}

//Function that is called each time a button is pressed to see if anyone has won
function win() {
    if (playerScore === 5 && computerScore === 5) {
        document.getElementById('info').innerText = "It's a draw! Click the reset button to play again.";
        disable();
    }
    else if (playerScore === 5 && computerScore < 5) {
        document.getElementById('info').innerText = "You win! Click the reset button to play again.";
        disable();
    }
    else if (computerScore === 5 && playerScore < 5) {
        document.getElementById('info').innerText = "You lose! Click the reset button to play again.";
        disable();
    }
    else {
        return;
    }
}

//Function to disable button actions once a round is over
function disable() {
    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');
    rock.removeAttribute('onclick');
    paper.removeAttribute('onclick');
    scissors.removeAttribute('onclick');
}






