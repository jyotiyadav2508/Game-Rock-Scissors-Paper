const MAX_ROUNDS = 5;
// let userChoice;
// let computerChoice;
let clickCount=0;
// let userScore=0;
// let computerScore=0;

/**The complete game logic where user input is parsed, then random computer input is generated and logic is executed to determine the winner */

function onUserSelection(event) {
    // let clickCount;
    if(clickCount >= MAX_ROUNDS) return;

    clickCount = ++clickCount;
    let userChoice = event.currentTarget.id;
    let computerChoice = getComputerChoice();

    renderChoice(true, userChoice);
    renderChoice(false, computerChoice);

    let compareResult = checkResult(userChoice, computerChoice);
    document.getElementById("compare-result").innerHTML = compareResult;
    console.log(computerChoice, compareResult, clickCount);
        // console.log(userScore, computerScore);


    let userWon = checkResult(userChoice, computerChoice);
    incrementScore(userWon);
    displayWinner(userWon);

    if(clickCount === 5){
        let winnerName = displayWinner();
        document.getElementById("winner").innerHTML = winnerName;
        alert("Game Over! Restart again")
    } 

 


    if(clickCount >= MAX_ROUNDS) {
        gameOver();
    }
}

function renderChoice(isUser, choice) {
    let choiceElement = isUser ? "user-choice": "computer-choice";

    document.getElementById(choiceElement).innerHTML = `<i class= "fa-solid fa-hand-${choice} fa-2x"></i>`
}

// let compareResult = checkResult();
// document.getElementById("compare-result").innerHTML = compareResult;
// console.log(computerChoice, compareResult, clickCount);
    // console.log(userScore, computerScore);

// if(clickCount === 5){
//     let winnerName = displayWinner();
//     document.getElementById("winner").innerHTML = winnerName;
//     alert("Game Over! Restart again")
// }    

function getComputerChoice(){
    let randomNumber = Math.random();
    if(randomNumber < 0.33){
        return "rock";
    }else if(randomNumber < 0.66){
        return "scissors";
    }else{
        return "paper";
    }
}

function checkResult(userChoice, computerChoice) {
    if(userChoice === computerChoice){
        return "It's a draw!";
    }else if ((userChoice === "rock" && computerChoice === "paper") || 
             (userChoice === "paper" && computerChoice === "scissors") || 
             (userChoice === "scissors" && computerChoice === "rock")) 
    {
    incrementScore(false);
    return `Computer Wins! (${computerChoice} beats ${userChoice})`;
} else {
  incrementScore(true);
  return `User Wins!  (${userChoice} beats ${computerChoice})`;
} 
}

function incrementScore(userWon){
    if(userWon === undefined) return;

    let scoreElement = userWon ? "user-score" : "computer-score";
    score = parseInt(document.getElementById(scoreElement).innerHTML);
    document.getElementById(scoreElement).innerHTML = ++score;
}
function displayWinner(userScore, computerScore) {
    if (userScore > computerScore) {
        return "Congratulations ! User Wins...";
    } else if (userScore < computerScore) {
        return "Computer wins the game!";

    } else(userScore = computerScore); {
        return "it's a draw!";
    }
    style.displayWinner = red;
} 

function initGame(){
    let userOptions = document.querySelectorAll(".icon");
    userOptions.forEach((icon) => icon.addEventListener("click", onUserSelection));
}
document.addEventListener("DOMContentLoaded", initGame);