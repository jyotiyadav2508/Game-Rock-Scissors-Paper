let userOptions = document.querySelectorAll(".icon");
userOptions.forEach(icon => icon.addEventListener("click", getUserChoice));
let userChoice
let computerChoice
// let compareResult

function getUserChoice(event) {
    userChoice = event.target.id;
    // document.getElementById("user-choice").innerHTML = userChoice;
    document.getElementById("user-choice").innerHTML = `<i class= "fa-solid fa-hand-${userChoice} fa-2x"></i>`;
    computerChoice = getComputerChoice();
    document.getElementById("computer-choice").innerHTML = `<i class= "fa-solid fa-hand-${computerChoice} fa-2x"></i>`;
    let compareResult = checkResult();
    document.getElementById("compare-result").innerHTML = compareResult;
    console.log(userChoice, computerChoice, compareResult);
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
    } else if ((userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper") || (userChoice === "rock" && computerChoice === "scissors")){
        increaseUserScore();
    return `User Wins!  (${userChoice} beats ${computerChoice})`;
}else {
    return "It's a draw!"
}
}

function increaseUserScore(){
    let userOldScore = parseInt(document.getElementById('user-score').innerHTML);
    document.getElementById('user-score').innerHTML = ++userOldScore;
}
function increaseComputerScore(){
    let computerOldScore = parseInt(document.getElementById('computer-score').innerHTML);
    document.getElementById('computer-score').innerHTML = ++computerOldScore;
}
// A popup buttton game-Over. on click game-over run displayWinner
function displayWinner(){
    if(increaseUserScore > increaseComputerScore){
        alert("User Wins the Game");
        document.getElementById("winner").innerText= "Congratulations ! User Wins..."
    }else if(increaseUserScore < increaseComputerScore){
        alert("Ohhh User lost the game");
        document.getElementById("winner").innerText= "Computer wins the game" 

    }else(increaseUserScore === increaseComputerScore);{
        document.getElementById("winner").innerText= "It's a tie"
    }

}