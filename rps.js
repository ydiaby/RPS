function computerPlay() {
  let options = ["rock", "paper", "scissors"]
  return(options[Math.floor(Math.random()*options.length)]);
}

function playRound (playerSelection, computerSelection){
if (playerSelection === computerSelection) {
return ("This is a tie" )
} else if ((playerSelection == "rock" && computerSelection == "scissors") ||(playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")) {
return"You win."
} else {
return("You lose.")
}
}



function game() {
let pScore = 0;
let comScore = 0;


for (let i = 0; i < 5; i++) {
  let answer = prompt("Please choose Rock, Paper, or Scissors.").toLowerCase();;
  if (playRound(answer, computerPlay) === "This is a tie"){
    console.log("Tie Round")
    
  }else if (playRound(answer, computerPlay) === "You win"){
    console.log("You won this round")
    pScore = pScore + 1 
    
  }else if (playRound(answer, computerPlay) === "You lose") {
    console.log("You lost this round ")
    comScore = comScore + 1
    }
  }
console.log(`You won ${pScore} rounds while the computer won ${pScore} rounds`)
}

game()




