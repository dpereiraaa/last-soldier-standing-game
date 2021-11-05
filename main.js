// ** GLOBAL VARIABLES

//CANVAS SETUP

let canvas = document.querySelector("#my-canvas");

let ctx = canvas.getContext("2d");

//DOM ELEMENTS

let startBtn = document.querySelector("#start-btn")

let restartBtn = document.querySelector("#restart-btn")

let splashScreen = document.querySelector("#splash-screen")

let gameoverScreen = document.querySelector("#gameover-screen")

let score = document.querySelector("span")


//* SOUNDS

let audio = document.createElement("AUDIO")
document.body.appendChild(audio);
audio.src = "./sounds/gameintro.mp3"

let gunShot = new Audio("./sounds/gunshot.mp3")
let gameEnd = new Audio("./sounds/gameover1.mp3")
let gameEnd2 = new Audio("./sounds/gameover2.mp3")

//GAME OBJECT

let game;
//*FUNCTIONS

const startGame = () => {
    splashScreen.style.display = "none";
    canvas.style.display = "flex";
    scorespan.style.display = "flex"

    game = new Game();
    game.gameLoop();
    audio.muted = true;
}

const restartGame = () => {
    gameoverScreen.style.display = "none";
    canvas.style.display = "flex";
    game = new Game();
    game.gameLoop();
    audio.muted = true;
    scorespan.style.display = "flex"

}


//* ADD EVENT LISTENERS

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", restartGame);

window.addEventListener("keydown", (event) => {    
    if(event.code === "ArrowRight") {
        game.soldier.soldierMoveRight();
    } else if (event.code === "ArrowLeft") {
        game.soldier.soldierMoveLeft();
    } else if (event.code === "Space") {
        game.spawnBullets();
        gunShot.play();
    };
});

window.addEventListener("mousemove", function () {
    audio.play()
})