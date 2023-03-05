// console.log("hello.world");

const odds = ["rock","paper", "scissors"];

function getComputerChoice(){
    const choice = odds[Math.floor(Math.random() * 3)];
    
    return choice;
}

// checkWinner checks who's won the game
function checkWinner(playerSelection , computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    }
    else if(
    (playerSelection == "rock" && computerSelection == "scissors")||
    (playerSelection == "scissors" && computerSelection == "paper")||
    (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    }
    else{
        return "Computer";
    }
}

// playRound shows who's won the game
function playRound(playerSelection , computerSelection){
    const result = checkWinner(playerSelection,computerSelection);

    if(result == "Tie"){
        return "it's a tie";
    }
    else if(result == "Player"){
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if(result == "Computer"){
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function getPlayeerChoice(){
    let input = false;
    while(input == false){
        const choice = prompt("Rock Paper Scissors");
        if(choice == null){
            continue;
            //if you donnot write anything will repeat the prompet question
        }
        const choiceInLower = choice.toLowerCase();
        // turns all words to lowerCase
        if(odds.includes(choiceInLower)){
            // checks if odds includes the written choice or not
            input = true;
            //if the written choice is exest the input will be 1 and the comparison will be work
            return choiceInLower;
        }
    }
}

function Diplay(){
    let countComputer =0;
    let countPlayer =0;
    for( let i=0 ; i<5 ; i++){
        const playerSelection = getPlayeerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        if(checkWinner(playerSelection,computerSelection) == "Player"){
            countPlayer++;
        }
        else if(checkWinner(playerSelection,computerSelection) == "Computer"){
            countComputer++;
        }
    }
    console.log("the game is end");
    if(countComputer>countPlayer){
        console.log("Computer is the winner");
    }
    else if(countPlayer>countComputer){
        console.log("Player is the winner");
    }
    else{
        console.log("We have a tie");
    }
}
Diplay();