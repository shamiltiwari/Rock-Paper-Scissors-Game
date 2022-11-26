const game = () =>{
    let pScore = 0;
    let cScore = 0;

    //Start Game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
            match.classList.remove("fadeOut");
        });
    };

    //Play Match
    const playMatch = () =>{
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".playerHand");
        const computerHand = document.querySelector(".computerHand");

        //Computer Options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach((options) => {
            options.addEventListener("click", function(){
                //Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                console.log(computerChoice);

                //Here we will call the function Comparing Hands
                compareHands(this.textContent, computerChoice);

                //Update Images
                playerHand.src = `./Assets/${this.textContent}.png`;
                computerHand.src = `./Assets/${computerChoice}.png`;
            });
        });
    };

    //Update Score
    const updateScore = () =>{
        const playerScore = document.querySelector(".playerScore p");
        const computerScore = document.querySelector(".computerScore p");
        playerScore.textContent = pScore;
        computerScore.textContent =cScore;
    };

    //Comparing Hands
    const compareHands = (playerChoice, computerChoice) =>{

        //text update
        const winner = document.querySelector(".winner");

        //checking for a tie
        if(playerChoice === computerChoice){
            winner.textContent = "Its a tie bruh !";
            return;
        };

        //check for rock
        if(playerChoice === "rock"){
            if(computerChoice === "scissors"){
                winner.textContent = "Player Wins !";
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = "Computer Wins !";
                cScore++
                updateScore();
                return;
            }
        };

        //check for paper
        if(playerChoice === "paper"){
            if(computerChoice === "rock"){
                winner.textContent = "player Wins !";
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = "Computer Wins !";
                cScore++;
                updateScore();
                return;
            }
        };

        //check for scissors
        if(playerChoice === "scissors"){
            if(computerChoice === "paper"){
                winner.textContent = "Player Wins !";
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = "Computer Wins !";
                cScore++;
                updateScore();
                return;
            }
        };
    };

    //Call all the inner functions.
    startGame();
    playMatch();
};

//Start the Game Function.
game();

console.log("Hello World");