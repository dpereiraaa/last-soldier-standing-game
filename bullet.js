class Bullet {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    drawBullet = () => {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    };

    bulletMove = () => {
        this.y -= 3;
    };

    bulletRobotCollision = (oneRobot) => {
        if(this.x < oneRobot.x + oneRobot.width &&
            this.x + this.radius > oneRobot.x &&
            this.y < oneRobot.y + oneRobot.height &&
            this.radius + this.y > oneRobot.y) {
                return true;
            } else {
                return false;
            };
    }; 
};