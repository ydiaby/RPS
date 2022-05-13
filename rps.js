function computerPlay() {
  let options = ["rock", "paper", "scissors"]
  return(options[Math.floor(Math.random()*options.length)]);
}

/* Generates the computer choice  */


function playRound (playerSelection, computerSelection){
if (playerSelection === computerSelection) {
return ("This is a tie" )
} else if ((playerSelection == "rock" && computerSelection == "scissors") ||(playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")) {
return"You win."
} else {
return("You lose.")
}
}
/* Determines all the win-lose outcomes  */


function game() {
let pScore = 0;
let comScore = 0;
let tie = 0;

const buttons = document.querySelector('#buttons');
buttons.addEventListener('click', doSomething, false);

function doSomething(e){
  if (e.target !== e.currentTarget){
    return e.target.id;
  }
  e.stopPropagation();
}

/* Determines what button was clicked and returns that value  */



                
for (let i = 0; i < 5; i++) {
  let com = computerPlay();
  let choice = doSomething;
  if (playRound(choice, com) === "This is a tie"){
    results.textContent = 'Tie Round';  
    tie += 1;
    
    
  }else if (playRound(choice, com) === "You win."){
    results.textContent = "You won this round"; 
    pScore += 1;
    
  }else if (playRound(choice, com) === "You lose.") {
    results.textContent = 'You lost this round';
    comScore += 1;
    }
  }
  /* Plays 5 round and determines who won each round  */

if (pScore > comScore){
  results.textContent = `You won the game. You won ${pScore} out of five rounds.`;
} else if (pScore === comScore){
  results.textContent = `You tied the game. You won ${pScore} out of five rounds.`; 
}else{
  results.textContent = `You lost the game. You won ${pScore} out of five rounds.`;     
}
}
/* Determines who won the round and adds it under the results div  */

game()










