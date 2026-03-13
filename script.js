const rock = document.getElementById('btn-Rock');
const paper = document.getElementById('btn-Paper');
const scissors = document.getElementById('btn-Scissors');

const screenComputer = document.querySelector('.screen-computer');
const screenResult = document.querySelector('.screen-result');

// Função para gerar a escolha aleatória do computador
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Função principal que executa o jogo
function play(playerChoice) {
    const computerChoice = getComputerChoice();
    
    // Exibe as escolhas nas telas (screens)
    screenComputer.innerText = `Computer: ${computerChoice}`;
    screenResult.innerText = `You: ${playerChoice}`;
    
    console.log("Player:", playerChoice, "| Computer:", computerChoice);
}

// Eventos de clique (apenas um para cada botão)
rock.addEventListener('click', () => play('Rock'));
paper.addEventListener('click', () => play('Paper'));
scissors.addEventListener('click', () => play('Scissors'));