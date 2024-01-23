// Make two variables for user & computer

let userScore = 0;
let compScore = 0;

// to access choices 
const choices = document.querySelectorAll(".choice");

// to access message
const msg = document.querySelector("#msg");

// accessing reset button
const reset = document.querySelector(".reset-container");

// accessing score
const scoreuser = document.querySelector("#user-score");
const scorecomp = document.querySelector("#comp-score");

// reseting game
const reStartGame = () => {
    compScore = scorecomp.innerText = 0;
    userScore = scoreuser.innerText = 0;
    msg.innerText = "Play your move" ;
    msg.style = getComputedStyle(msg);
};

// adding clickfunction on reset
reset.addEventListener("click",reStartGame);

// Generating computer choice randomly
const genCompChoice = () => {

    //computer will generate between rock,paper, scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

//Generating user choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        // to get id inside
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


// create a func for draw game
const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText = "Game was draw, play again";
    msg.style.backgroundColor = "#ffbe0b";
}

// show message
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
            console.log("You win");
            msg.innerText = `${userChoice} beats ${compChoice}, You win! 🤩🏆`;
            msg.style.backgroundColor = "green"; 
            userScore ++;
            scoreuser.innerText = userScore;

    } else {
        console.log("You lose");
        msg.innerText =  `Oops! ${compChoice} beats ${userChoice}, You lose 😔`;
        msg.style.backgroundColor = "red";
        compScore++;
        scorecomp.innerText = compScore;
    }
}


// to make a random choice by computer & play game
const playGame = (userChoice) => {
    console.log("user choice = " ,userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice == compChoice){
        drawGame();
    } else {
        // track wining & choices
        let userWin = true;
        if(userChoice === "rock") {
            // Scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false:true;
        } else {
            userWin = compChoice === "rock" ?false:true;
        } 
        showWinner(userWin,userChoice,compChoice);
    }
};




