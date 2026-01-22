let options = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length)
    return options[randomIndex]
}

let input = prompt(" Selection Number || 1 = Rock || 2 = Paper || 3 = Scissors || ")
let getHumanChoice = parseInt(input)

console.log("Número digitado:", getHumanChoice)
console.log("Escolha do PC:", getComputerChoice())