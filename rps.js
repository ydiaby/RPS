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
  let rounds = 0; 

  const results = document.getElementById("results");
  const eachRound = document.createElement('div');
  eachRound.textContent = (`Rounds:  ${rounds}`);
  document.body.append(eachRound);
  


  const buttons = document.querySelector('#buttons');
  buttons.addEventListener('click', doSomething, false);
  
  function doSomething(e){
    let com = computerPlay();  
    if (e.target !== e.currentTarget){
      let choice =  e.target.id.toString();
      if (playRound(choice, com) === "This is a tie"){
        tie += 1;
        results.textContent = 'Tie Round.';  
        rounds +=1;
        eachRound.textContent = `Rounds:  ${rounds}`;
      }else if (playRound(choice, com) === "You win."){ 
        pScore += 1;
        results.textContent = 'You won this round.';  
        rounds +=1;
        eachRound.textContent = `Rounds:  ${rounds}`;
      }else if (playRound(choice, com) === "You lose.") {
        comScore += 1;
        results.textContent = 'You lost this round.';  
        rounds +=1;
        eachRound.textContent = `Rounds:  ${rounds}`;
        }
    e.stopPropagation();
    }  
    if (rounds === 5 && pScore > comScore){
      results.textContent = `You won the game. You won ${pScore} rounds, tied ${tie} rounds, and lost ${comScore} rounds.`;
      rounds = 0;
      comScore = 0;
      pScore = 0;
      tie =0;
    }else if (rounds === 5 && pScore === comScore){
      results.textContent = `You tied the game. You won ${pScore} rounds, tied ${tie} rounds, and lost ${comScore} rounds.`; 
      rounds = 0;
      comScore = 0;
      pScore = 0;
      tie =0;
    }else if (rounds === 5 && pScore < comScore){
      results.textContent = `You lost the game. You won ${pScore} rounds, tied ${tie} rounds, and lost ${comScore} rounds.`;
      rounds = 0;
      comScore = 0;
      pScore = 0;
      tie =0;
    } 
  }

  } 
/* Determines who won the round and adds it under the results div  */

game()










