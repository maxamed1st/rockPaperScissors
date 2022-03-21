function getRandInt(max) {
    //Get random integer between 0 and max
    return Math.floor(Math.random() * max)
}

function computerPlay() {
    //Randomly generate rock, paper or scissors
    choices = ["rock", "paper", "scissors"]
    randInt = getRandInt(3)
    return choices[randInt]

}
function roundPlay(computerSelection, playerSelection) {
    /* Get the selection from the player and computer.
    Compare the selections to determin a winner.
    Return players win/lost status as string
    */
   playerSelection = playerSelection.toLowerCase().trim()
   if (playerSelection=="rock" && computerSelection=="scissors" || 
   playerSelection=="paper" && computerSelection=="rock" || playerSelection=="scissors" && computerSelection=="paper") {
       return "Player 1 is the winner of this round"
   } else {
       return "Computer took home this round"
   }
}
function assertValidChoice(playerSelection) {
    //Assert valid choices for the player
    choices = ["rock", "paper", "scissors"]
    playerSelection = playerSelection.toLowerCase().trim()
    if (choices.indexOf(playerSelection) >= 0) return true
    else return false
}
function game() {
    /*Play 5 rounds of the game by calling roundPlay 5x.
    Keep score of the winner of each game. Calculate the winner of all the games.
    Present the winner
    */
   score = [0, 0]
   for (let i=0; i<5; i++) {
       computerSelection = computerPlay();
       playerSelection = prompt('Select your weapon:');

       //make sure that playerSelection and computerSelection are not the same
       while (computerSelection == playerSelection.trim()) {
           console.log('This round is even. Go for another round!')
           computerSelection = computerPlay();
           playerSelection = prompt('Select your weapon agian')
       }
       
       //Assert valid player choice
       choiceValidity = assertValidChoice(playerSelection)
       while (choiceValidity===false) {
           playerSelection = prompt('You have chosen an insufficient weapon for this war. \
           Remember this is a game of rock, paper scissors and choose again!');
           choiceValidity = assertValidChoice(playerSelection)
        }

       //determend winner and update score
       winner = roundPlay(computerSelection, playerSelection);
       if (winner[0] == "P") {
           score[0] += 1;
           console.log(`score: ${score} winner: ${winner}`)
       } else if (winner[0] == "C") {
           score[1] += 1;
           console.log(`score: ${score} winner: ${winner}`)
       } else {
           console.log(`The fuck just happen?? score: ${score} winner: ${winner}`)
       }

       console.log(`END of round ${i+1}`)
    }

    //present result
   if (score[0] >= score[1]) {
       return `player 1 is the winner of this game! with total of ${score[0]} wins against ${score[1]} loss`
    } else {
        return `Computer took hame the game this time with ${score[1]} wins and ${score[0]} loss `}
    }

console.log(game())