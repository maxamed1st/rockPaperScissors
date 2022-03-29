choices = ["rock", "paper", "scissors"];
const selections = document.querySelector('#selections');
const btns = selections.querySelectorAll("button");
const para = document.getElementById('para');
const replay = document.getElementById('replay');

let playerSelection;
let computerSelection;

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
   if (playerSelection=="rock" && computerSelection=="scissors" || 
   playerSelection=="paper" && computerSelection=="rock" || playerSelection=="scissors" && computerSelection=="paper") {
       return `Player is the winner of this round \n${playerSelection} beats ${computerSelection}` 
    }
    else if (playerSelection==computerSelection) return "This round is even";
    else {
       return `Computer is the winner of this round \n${computerSelection} beats ${playerSelection}`
   }
}

const result = function(...text) {
    text.forEach(element => {
        if (typeof element == 'string') para.textContent = element;
        else {
            para.textContent = `${element}`;
        }
        
    })
}

function game() {
    /*Keep score of the winner of each game
    If a player reaches 5 wins Present that winner
    end game */
    replay.hidden = true;
    let score = [0, 0];
    let wins = [0, 0]
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            playerSelection = btn.innerText;
            computerSelection = computerPlay();
            //determend winner and update score
            winner = roundPlay(computerSelection, playerSelection);
            if (winner[0] == "P") {
                score[0] += 1;
            } else if (winner[0] == "C") {
                score[1] += 1;
            }
            result(`${winner} \nscore: Player: ${score[0]} computer: ${score[1]}`);
            if (score[0]=='5' || score[1]=='5') {
                //present result
                if (score[0] >= score[1]) {
                    wins[0] += 1;
                    result(`player is the winner of this game! with total of ${score[0]} wins against ${score[1]} loss`)
                } else {
                    wins[1] += 1;
                    result(`Computer took home the game with ${score[1]} wins and ${score[0]} loss`)}
                //Disable buttons and enable Replay
                btns.forEach(bttn => bttn.disabled=true);
                replay.hidden = false
            };
        });
    });
    replay.addEventListener('click', () => {
        result(`The scoreboard is now \nPlayer: ${wins[0]} \nComputer: ${wins[1]}`)
        setTimeout( () => {
        result("Let's go for another round!");
        score = [0, 0];
        btns.forEach(btn => btn.disabled = false);
        replay.hidden = true;
        }, 3000);

    })
}

game();
