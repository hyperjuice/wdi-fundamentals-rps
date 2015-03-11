////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove() {
    var set = ['rock', 'paper', 'scissors'];
    var input;
    while (set.indexOf(input) === -1) {
        input = getInput();
   } 
   return input;
}

//Thanks Brett

function getComputerMove() {
    return randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === "rock" && computerMove === "scissors") {
        winner = "player";
    } else if (playerMove === "scissors" && computerMove === "paper") {
        winner = "player";
    } else if (playerMove === "paper" && computerMove === "rock") {
        winner = "player";
    } else if (computerMove === "rock" && playerMove === "scissors") {
        winner = "computer";
    } else if (computerMove === "scissors" && playerMove === "paper") {
        winner = "computer";
    } else if (computerMove === "paper" && playerMove === "rock") {
        winner = "computer";
    } else if (computerMove === "rock" && playerMove === "rock") {
        winner = "tie";
    } else if (computerMove === "scissors" && playerMove === "scissors") {
        winner = "tie";
    } else {
        winner = "tie";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while ((playerWins < 5) && (computerWins < 5)) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove,computerMove);
        if (winner === "player") {
            playerWins += 1;
        } else if (winner === "computer") {
            computerWins += 1;
        }
        console.log("Your move was " + playerMove + ", and the cyborg chose " + computerMove + ".");
        console.log("At present, you have " + playerWins + " wins, and the cyborg has " + computerWins + " wins." + "\n");
    }

    if (playerWins === 5) {
        console.log("You win!");
    } else {
        console.log("Cyborg wins; SkyNet is coming.")
    }    
}

//Thanks Brett

playToFive();