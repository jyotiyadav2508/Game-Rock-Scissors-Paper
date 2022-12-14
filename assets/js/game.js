
//Total number of selections per game.
const MAX_ROUNDS = 5;

//The current count of how many times user  makes a selection. 
let clickCount = 0;

/**
 * The complete game logic where user input is parsed, 
 * then random computer input is generated and 
 * logic is executed to determine the winner.
 * @param event the click event
 */
function onUserSelection(event) {
    if (clickCount >= MAX_ROUNDS) {
        alert("Game Over! Click Restart to play again");
        return;
    }

    ++clickCount;
    let userChoice = event.currentTarget.id;
    let computerChoice = getComputerChoice();
    renderChoice(true, userChoice);
    renderChoice(false, computerChoice);
 
    let compareResult = checkResult(userChoice, computerChoice);
    document.getElementById("compare-result").innerHTML = compareResult;
    document.getElementById("selections-left").innerHTML =
      MAX_ROUNDS - clickCount;
   
     if (clickCount === MAX_ROUNDS) {
        displayWinner();
    }
}

/**
 * Renders choice made by user and computer.
 * @param {boolean} isUser If true, its user choice. If false, computer choice.
 * @param {object} choice The choice made by user and computer.
 */
function renderChoice(isUser, choice) {
    let choiceElement = isUser ? "user-choice" : "computer-choice";
    document.getElementById(choiceElement).innerHTML =
        `<i class= "fa-solid fa-hand-${choice} fa-2x"></i>`;
}

/**
 * Generate computer's random choice.
 * @return {string} Randomly generated choice for computer.
 */
function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "scissors";
    } else {
        return "paper";
    }
}

/**
 * Check the result of single round by comparing user and computer choice.
 * Based on the result, score will be updated for user or computer.
 * @param {object}  userChoice User selection
 * @param  {object} computerChoice Computer's random selection
 * @returns {string} result of user and computer choice
 */
function checkResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a draw!";
      } else if (
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "rock")
      ) {
        incrementScore(false);
        return `Computer Wins! (${computerChoice} beats ${userChoice})`;
      } else {
        incrementScore(true);
        return `User Wins!  (${userChoice} beats ${computerChoice})`;
      }
}

/**
 * Get the current score from the DOM and increment 
 * by 1 either user score or computer score.
 * @param userWon if true, user won. else, computer won. 
 */
function incrementScore(userWon) {
    if (userWon === undefined) return;
    let scoreElement = userWon ? "user-score" : "computer-score";
    let score = parseInt(document.getElementById(scoreElement).innerHTML);
    document.getElementById(scoreElement).innerHTML = ++score;
}

/**
 * Displays the final game result after comparing the user and computer score.
 */
function displayWinner() {
    let userScore = parseInt(document.getElementById("user-score").innerHTML);
    let computerScore = parseInt(document.getElementById("computer-score")
        .innerHTML);

    let winText = "";
    if (userScore > computerScore) {
        winText = "Congratulations ! User Wins...";
    } else if (userScore < computerScore) {
        winText = "Computer Wins the game!";
    } else {
        winText = "It's a Draw!";
    }

    document.getElementById("winner").innerHTML = winText;
}

/**
 * Initializes the game and atteches required event handlers.
 */
function initGame() {
    let userOptions = document.querySelectorAll(".icon");
    userOptions.forEach((icon) =>
      icon.addEventListener("click", onUserSelection)
    );
}
//Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", initGame);