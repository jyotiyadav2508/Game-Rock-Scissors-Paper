let userOptions = document.querySelectorAll(".icon");
userOptions.forEach(icon => icon.addEventListener("click", getUserChoice));
let userChoice
let computerChoice

function getUserChoice(event){
    userChoice = event.target.id;
    // document.getElementById("user-choice").innerHTML = userChoice;
    document.getElementById("user-choice").innerHTML= `<i class= "fa-solid fa-hand-${userChoice} fa-2x"></i>`; 
    computerChoice = getComputerChoice();
    document.getElementById("computer-choice").innerHTML = `<i class= "fa-solid fa-hand-${computerChoice} fa-2x"></i>`;
    let compareResult = checkResult();
    document.getElementById("compare-result").innerHTML = compareResult;
    console.log(userChoice, computerChoice, compareResult);
}