const start = ["Rock", "Paper", "Scissors"]

let input = prompt(" || 1 = Rock || 2 = Paper || 3 = Scissors || ")
let humanPick = parseInt(input)

const options = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

console.log(humanPick);