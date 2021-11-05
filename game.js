class Game {
  //PROPERTIES
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/bg.png";
    this.soldier = new Soldier();
    this.robotArr = [new Robot(400)];
    this.bulletArr = [];
    this.isGameOver = false;
    this.frames = 0;
    this.score = 0;
  }

  //METHODS

  gameover = () => {
    this.isGameOver = true;
    canvas.style.display = "none";
    gameoverScreen.style.display = "flex";
    scorespan.style.display = "none";
    gameEnd.play();
    gameEnd2.play();
  };

  spawnBullets = () => {
    let randomBullet = new Bullet(this.soldier.x + this.soldier.width / 2, this.soldier.y + this.soldier.height / 2, 2.5, "yellow");
    this.bulletArr.push(randomBullet);
    gunShot.play();
  };

  spawnRobots = () => {
    /*      if (lastRobot.y === 200) { */
    if (this.frames % 300 === 0) {
      let randomPosX = Math.random() * canvas.width * 0.75;
      let randomRobot = new Robot(randomPosX);
      this.robotArr.push(randomRobot);
    }
  };

   robotGroungCollision = () => { //may need to do a forEach if the first robot dies.
       this.robotArr.forEach((eachRobot) => {
       if(eachRobot.y > canvas.height) {
            this.gameover();
        };
      });
  };

  gameLoop = () => {
    //*1-CLEARING THE CANVAS
    this.frames++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //*2-MOVEMENT AND CHANGES ON ELEMENTS
    this.robotArr.forEach((eachRobot) => {
      eachRobot.robotMove();
    });

    this.bulletArr.forEach((eachBullet) => {
      eachBullet.bulletMove();
    });

    this.spawnRobots();

    this.robotGroungCollision();

    this.robotArr.forEach((eachRobot) => {
      if (this.soldier.soldierRobotCollision(eachRobot)) {
        this.gameover();
      }
    });

    this.bulletArr.forEach((eachBullet, i) => {
      this.robotArr.forEach((eachRobot, idx) => {
        if (eachBullet.bulletRobotCollision(eachRobot)) {
          this.robotArr.splice(idx, 1);
          this.bulletArr.splice(i, 1);
          this.score++
          score.innerHTML = this.score;
        }
      });
    });

    //*3-DRAWING ELEMENTS

    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);

    this.soldier.drawSoldier();

    this.robotArr.forEach((eachRobot) => {
      eachRobot.drawRobot();
    });

    this.bulletArr.forEach((eachBullet) => {
      eachBullet.drawBullet();
    });

    //*4-ANIMATION FRAME AND GAME LOGIC CHANGES

    if (!this.isGameOver) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
