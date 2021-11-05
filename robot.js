class Robot {
    constructor(xPos) {
        this.image = new Image();
        this.image.src = "./images/robot.png";
        this.width = 35;
        this.height = 65;
        this.x = xPos;
        this.y = canvas.height - 675;
    };

    drawRobot = () => {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    };

    robotMove = () => {
        this.y += 0.75;
    };


};