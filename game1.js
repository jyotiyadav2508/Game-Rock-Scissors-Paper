let userChoice;
let computerChoice;
let computerScore=0;
let userScore=0;
let clickCount =0;

let userOptions = document.querySelectorAll(".icon");
userOptions.forEach(icon => icon.addEventListener("click", getUserChoice));


function getUserChoice(event) {
    userChoice = event.target.id;
    if(clickCount < 5){
    clickCount = ++clickCount;
    // document.getElementById("user-choice").innerHTML = userChoice;
    document.getElementById("user-choice").innerHTML = `<i class= "fa-solid fa-hand-${userChoice} fa-2x"></i>`;
    computerChoice = getComputerChoice();
    document.getElementById("computer-choice").innerHTML = `<i class= "fa-solid fa-hand-${computerChoice} fa-2x"></i>`;
    let compareResult = checkResult();
    document.getElementById("compare-result").innerHTML = compareResult;
    console.log(userChoice, computerChoice, compareResult, clickCount);
    console.log(userScore, computerScore);}
    if (clickCount === 5) {
        let winnerName = displayWinner();
        document.getElementById("winner").innerHTML = winnerName;
        alert("Game Over! Please restart to play again");   
    }
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

function checkResult() {
    if ((userChoice === "rock" && computerChoice === "paper") || (userChoice === "paper" && computerChoice === "scissors") || (userChoice === "scissors" && computerChoice === "rock")) {
        increaseComputerScore();
        return `Computer Wins! (${computerChoice} beats ${userChoice})`;
    } else if ((userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper") || (userChoice === "rock" && computerChoice === "scissors")) {
        increaseUserScore();
        return `User Wins!  (${userChoice} beats ${computerChoice})`;
    } else {
        return "It's a draw!";
    }
}

function increaseUserScore() {
    userScore = parseInt(document.getElementById('user-score').innerHTML);
    document.getElementById('user-score').innerHTML = ++userScore;

}

function increaseComputerScore() {
    computerScore = parseInt(document.getElementById('computer-score').innerHTML);
    document.getElementById('computer-score').innerHTML = ++computerScore;
}

function displayWinner() {
    if (userScore > computerScore) {
        return "Congratulations ! User Wins...";
    } else if (userScore < computerScore) {
        return "Computer wins the game!";

    } else(userScore = computerScore); {
        return "it's a draw!";
    }
    style.displayWinner = red;
} 