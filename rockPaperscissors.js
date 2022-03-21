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
   playerSelection = playerSelection.toLowerCase()
   if (playerSelection == computerSelection) return "This round is even"
   else if (playerSelection=="rock" && computerSelection=="scissors" || 
   playerSelection=="paper" && computerSelection=="rock" || playerSelection=="scissors" && computerSelection=="paper") {
       return "Player 1 is the winner of this round"
   } else {
       return "The computer is the winner of this round"
   }
}
function game() {
    /*Play 5 rounds of the game by calling roundPlay 5x.
    Keep score of the winner of each game. Calculate the winner of all the games.
    Present the winner
    */
   score = [0, 0]
   for (let i=0; i<5; i++) {
       computerSelection = computerPlay()
       playerSelection = prompt('Select your weapon:')
       console.log(roundPlay(computerSelection, playerSelection))
   }
}

game()