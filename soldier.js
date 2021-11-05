class Soldier {
    constructor() {
        this.soldierImage = new Image();
        this.soldierImage.src = "./images/soldier.png";
        this.width = 75;
        this.height = 75;
        this.x = 250;
        this.y = 510;
        }

        //  METHODS

        drawSoldier = () => {
            ctx.drawImage(this.soldierImage, this.x, this.y, this.width, this.height);            
        };        

        soldierMoveRight = () => {
            if(this.x + this.width + 15 < canvas.width) {
            this.x += 17;
            };
        };

        soldierMoveLeft = () => {
            if(this.x - 5 > 0) {
            this.x -= 17;
            };
        };

        soldierRobotCollision = (oneRobot) => {
            if(this.x < oneRobot.x + oneRobot.width &&
                this.x + this.width > oneRobot.x &&
                this.y < oneRobot.y + oneRobot.height &&
                this.height + this.y > oneRobot.y) {
                    return true;
                } else {
                    return false;
                };
        };
};