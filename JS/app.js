const game = () =>{
    let pScore = 0;
    let cScore = 0;

    // Start Game
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
    // Call all the inner functions.
    startGame();
};

// Play Match

// Start the Game Function.
game();

console.log("Hello World")