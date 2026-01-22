const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function getHumanChoice() {
    let input = prompt("Enter your choice: Rock, Paper, or Scissors");
    return input; 
}

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

    for (let i = 1; i <= 5; i++) {
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