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
let tie = 0;
for (let i = 0; i < 5; i++) {
  let com = computerPlay() 
  let answer = prompt("Please choose Rock, Paper, or Scissors.").toLowerCase();;
  if (playRound(answer, com) === "This is a tie"){
    console.log("Tie Round")
    tie = tie + 1
    
    
  }else if (playRound(answer, com) === "You win."){
    console.log("You won this round")
    pScore = pScore + 1 
    
  }else if (playRound(answer, com) === "You lose.") {
    console.log("You lost this round ")
    comScore = comScore + 1
    }
  }
if (pScore > comScore){
  console.log (`You won the game. You won ${pScore} out of five rounds.`)
} else if (pScore === comScore){
  console.log(`You tied the game. You won ${pScore} out of five rounds.`)
}else{
  console.log(`You lost the game. You won ${pScore} out of five rounds.`)
}
}

game()
