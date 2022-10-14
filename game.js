const MAX_ROUNDS = 5;
let clickCount = 0;


/**The complete game logic where user input is parsed, 
 * then random computer input is generated and 
 * logic is executed to determine the winner.
 * @param event the click event.
 */

function onUserSelection(event) {
    
    if (clickCount >= MAX_ROUNDS) {
        alert("Game Over! Click Restart to play again");
        return;
    }

    clickCount = ++clickCount;
    let userChoice = event.currentTarget.id;
    let computerChoice = getComputerChoice();

    renderChoice(true, userChoice);
    renderChoice(false, computerChoice);

    let compareResult = checkResult(userChoice, computerChoice);
    document.getElementById("compare-result").innerHTML = compareResult;
    console.log(userChoice, computerChoice, clickCount);

    let count = theCounter()
    // document.getElementById("attempt-left").innerHTML = count;
    // console.log(count);

    if (clickCount === 5) {
        let winnerName = displayWinner();
        document.getElementById("winner").innerHTML = winnerName;
    }
}

function renderChoice(isUser, choice) {
    let choiceElement = isUser ? "user-choice" : "computer-choice";

    document.getElementById(choiceElement).innerHTML = `<i class= "fa-solid fa-hand-${choice} fa-2x"></i>`
}

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

function checkResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a draw!";
    } else if ((userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "rock")) {
        incrementScore(false);
        return `Computer Wins! (${computerChoice} beats ${userChoice})`;
    } else {
        incrementScore(true);
        return `User Wins!  (${userChoice} beats ${computerChoice})`;
    }
}

function incrementScore(userWon) {
    if (userWon === undefined) return;

    let scoreElement = userWon ? "user-score" : "computer-score";
    score = parseInt(document.getElementById(scoreElement).innerHTML);
    document.getElementById(scoreElement).innerHTML = ++score;
}

function displayWinner() {
    let userScore = parseInt(document.getElementById("user-score").innerHTML);
    let computerScore = parseInt(document.getElementById("computer-score").innerHTML);
    if (userScore > computerScore) {
        return "Congratulations ! User Wins...";
    } else if (userScore < computerScore) {
        return "Computer Wins the game!";

    } else(userScore = computerScore); {
        return "It's a Draw!";
    }
    style.displayWinner = red;
}
let count = 5;
function theCounter(){
     count = --count ;
    // document.getElementById("attempt-left").innerHTML = "Remaining Attempts : ".count;
    document.getElementById("attempt-left").innerHTML = count;
    console.log(count);
   
}

function initGame() {
    let userOptions = document.querySelectorAll(".icon");
    userOptions.forEach((icon) => icon.addEventListener("click", onUserSelection));
}
document.addEventListener("DOMContentLoaded", initGame);