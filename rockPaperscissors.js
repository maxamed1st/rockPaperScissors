choices = ["rock", "paper", "scissors"]
function getRandInt(max) {
    //Get random integer between 0 and max
    return Math.floor(Math.random() * max)
}

function computerPlay() {
    //Randomly generate rock, paper or scissors
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
       return `Player is the winner of this round \n${playerSelection} beats ${computerSelection}`
   } else {
       return `Computer is the winner of this round \n${computerSelection} beats ${playerSelection}`
   }
}

function selection() {
    computerSelection = computerPlay()
    playerSelection = prompt('Select your weapon:');
    //make sure that playerSelection and computerSelection are not the same
    while (computerSelection == playerSelection.trim()) {
        computerSelection = computerPlay();
        playerSelection = prompt('This round is even. Go for another round!')
    }
}
function game() {
    /*Play 5 rounds of the game by calling roundPlay 5x.
    Keep score of the winner of each game. Calculate the winner of all the games.
    Present the winner
    */
   score = [0, 0]
   for (let i=0; i<5; i++) {
       //invoke computer and playerSelection
       selection()

       //determend winner and update score
       winner = roundPlay(computerSelection, playerSelection);
       if (winner[0] == "P") {
           score[0] += 1;
       } else if (winner[0] == "C") {
           score[1] += 1;
       } else {
           console.log(`The fuck just happen?? score: ${score} winner: ${winner}`)
       }
       console.log(`${winner} \nscore: Player: ${score[0]} computer: ${score[1]} `)
    }

    //present result
   if (score[0] >= score[1]) {
       return `player 1 is the winner of this game! with total of ${score[0]} wins against ${score[1]} loss`
    } else {
        return `Computer took home the game with ${score[1]} wins and ${score[0]} loss `}
    }

console.log(game())