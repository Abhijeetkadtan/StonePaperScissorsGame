let userscore = 0;
let compscore = 0;

let player = document.querySelector("#playerscore");
let comp = document.querySelector("#compscore");


const choices = document.querySelectorAll(".choice");
msg = document.querySelector("#msg");
const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const ridx = Math.floor(Math.random() * 3);
    return options[ridx];

}

const draw = () => {
    console.log("game was draw");
}


const showWinner = (userwin, userChoice, compChoice) => {
    if (userwin) {

        console.log("you win");
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        userscore++;
        player.innerText = userscore;
        msg.style.background = "green";

    }
    else {
        console.log("you lose");
        msg.innerText = `You Lose!  ${userChoice} beats your  ${compChoice}`;
        msg.style.background = "red";
        compscore++;
        comp.innerText = compscore;
    }
}

const playGame = (userChoice) => {
    console.log("users choice =", userChoice);
    const compChoice = getCompChoice();
    console.log("comp choice=", compChoice);

    if (userChoice === compChoice) {
        draw();

    }
    else {
        let userwin = true;
        if (userChoice === "rock") {
            userwin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userwin = compChoice === "scissors" ? false : true;
        }
        else {
            userwin = compChoice === "rock" ? false : true;

        }
        showWinner(userwin, userChoice, compChoice);
    }


};



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });

});
