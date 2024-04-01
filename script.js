let countComputerScore = 0;
let countHumanScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random()*3);
  let output;
  switch(randomNumber) {
    case 0:
      output = "Rock";
      break;
    case 1:
      output = "Paper";
      break;
    case 2:
      output = "Scissors";
      break;
  }
  return output;
}

function playRockPaperScissors(playerSelection,computerSelection) {
  // Convert input into acceptable format
  //compare if the input is the same as the computer input
  let output = "";
  if(playerSelection == computerSelection){
    output = `Its a tie! You both chose ${playerSelection}`;
  } else {
    switch(playerSelection + computerSelection) {
      case "RockScissors":
      case "PaperRock":
      case "ScissorsPaper":
        output = `You win! ${playerSelection} beats ${computerSelection}`;
        countHumanScore += 1;
        break;
      case "ScissorsRock":
      case "RockPaper":
      case "PaperScissors":
        output = `You Lose! ${computerSelection} beats ${playerSelection}`;
        countComputerScore += 1;
        break;
    }
  }
  return output;
}

function playARound(choice) {
  let playerSelection = choice;
  let computerSelection = getComputerChoice();
  let round = playRockPaperScissors(playerSelection,computerSelection);
  resultsContainer.innerHTML = "";
  let roundResult = document.createElement("p");
  roundResult.textContent = round;
  let currentScore = document.createElement("p");
  currentScore.textContent = `Current Score: You(${countHumanScore}) vs Frank(${countComputerScore})`;
  resultsContainer.appendChild(roundResult);
  resultsContainer.appendChild(document.createElement("br"));
  resultsContainer.appendChild(currentScore);
  checkIfEndOfGame();
}

function checkIfEndOfGame() {
  if(countComputerScore == 5){
    endOfGameResults("Frank has won");
  } else if(countHumanScore == 5){
    endOfGameResults("You have won");
  }
}

function endOfGameResults(result) {
  let endOfGameResult = document.createElement("p");
  endOfGameResult.textContent = result;
  resultsContainer.appendChild(document.createElement("br"));
  resultsContainer.appendChild(endOfGameResult);
  buttonContainer.removeEventListener("click", (e) => {
    playARound(e.target.textContent);
  });
}

let buttonContainer = document.querySelector("#buttonContainer");
buttonContainer.addEventListener("click", (e) => {
  playARound(e.target.textContent);
});

let resultsContainer = document.querySelector("#resultsContainer");