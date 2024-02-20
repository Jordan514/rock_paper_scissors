function getComputerChoice() {
  let randomNumber = Math.floor(Math.random()*3);
  let output
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
  return output
}

console.log(getComputerChoice())