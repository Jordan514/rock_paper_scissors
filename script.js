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

function upperCaseFirstLetter(word) {
  let wordLength = word.length;
  let firstLetter = word.slice(0,1).toUpperCase();
  let restOfWord = word.slice(1,wordLength).toLowerCase();
  return firstLetter + restOfWord;
}

function playRockPaperScissors(playerSelection,computerSelection) {
  // Convert input into acceptable format
  playerSelection = upperCaseFirstLetter(playerSelection);
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

function playARound() {
  let playerSelection = prompt("Rock, Paper, or Scissors?");
  let computerSelection = getComputerChoice();
  let round = playRockPaperScissors(playerSelection,computerSelection);
  console.log(round);
  console.log(`Current Score: You(${countHumanScore}) vs Frank(${countComputerScore})`);
}

function checkIfEndOfGame() {
  if(countComputerScore == 5){
    console.log("Frank has won")
  } else if(countHumanScore == 5){
    console.log("You have won")
  } else {
    playGame();
  }
}

function playGame() {
  playARound();
  checkIfEndOfGame();
}

let countComputerScore = 0;
let countHumanScore = 0;

playGame();