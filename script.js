// criando variaveis
const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors"); 
const options = ["rock", "paper", "scissors"];

buttonRock.addEventListener("click", () => {
    console.log("Selected Rock")
});
buttonPaper.addEventListener("click", () => {
    console.log("Selected Paper");
});
buttonScissors.addEventListener("click", () => {
    console.log("Selected Scissors");
});
    // 3. O próprio botão já sabe o que ele é. 
    // Então, ao ser clicado, ele joga a string "rock" direto na sua função do jogo!
    //playRound("rock", getComputerChoice()); 

// função pra aletoriedade do computer utilizando variaveis
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

// função contador do game score, jogo inicia 0 x 0 recebe escolha humana e aleatoriedade computer e as condições
function playGame() {
    console.log("GAME STARTED: Best of 5 Rounds!");

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (!humanChoice) {
            console.log("Empty input! Round skipped.");
            return;
        }

        const human = humanChoice.toLowerCase();
        const computer = computerChoice;

        console.log(`User: ${human} | CPU: ${computer}`);

        if (human === computer) {
            console.log("It's a tie!");
        } else if (
            (human === "rock" && computer === "scissors") ||
            (human === "paper" && computer === "rock") ||
            (human === "scissors" && computer === "paper")
        ) {
            console.log("You win this round!");
            humanScore++;
        } else {
            console.log("Computer wins this round!");
            computerScore++;
        }
    }
/* number of raunds*/
    for (let i = 1; i <= 1; i++) {
        console.log(`--- ROUND ${i} ---`);
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        
        console.log(`Current Score: User ${humanScore} - ${computerScore} CPU`);
    }

    console.log("==========================================");
    console.log(`🏁 FINAL SCORE: User ${humanScore} - ${computerScore} CPU`);
    
    if (humanScore > computerScore) {
        console.log("CONGRATULATIONS! YOU WON THE GAME!");
    } else if (computerScore > humanScore) {
        console.log("GAME OVER! THE COMPUTER WON.");
    } else {
        console.log("IT'S A DRAW!");
    }
}


playGame();