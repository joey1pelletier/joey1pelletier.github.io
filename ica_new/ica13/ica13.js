// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

//console.log("loaded properly");

class Ball {
    constructor(x,y,velX,velY,color,size) { // needed for making a new ball class. values of "this" are our default values
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }
    draw() {
        ctx.beginPath(); // will begin to draw our path
        ctx.fillStyle = this.color; // circle color
        ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI); // makes our circle
        ctx.fill();
    }

    update() {
        // this .x will handle the ball going to the left/right edges of screen
        if((this.x + this.size) >= width) {
            this.velX = -(this.velX);
        }
        if((this.x + this.size) <= 0) {
            this.velX = -(this.velX);
        }

        // will handle the ball going to the top/bottom of screen
        if((this.y + this.size) >= height) {
            this.velY = -(this.velY);
        }
        if((this.y + this.size) <= 0) {
            this.velY = -(this.velY);
        }

        //updates position of ball
        this.x += this.velX;
        this.y += this.velY;
        //this.color = randomRGB();
    }
    collisionDetect() {
        for(const ball of balls) {
            // check if ball is equal to whichever ball we're on i.e. it hits another ball
            if(this !== ball) {
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = (Math.sqrt(dx*dx + dy*dy)); 

                // if balls run into each other, change color
                if(distance < this.size + ball.size) {
                    ball.color = this.color = randomRGB();
                }
            }
        }
    }
}

const balls = [];
while (balls.length < 25) {
    const size = random(10,20);
    const ball = new Ball(
        random(0+size,width-size), 
        random(0+size,height-size),
        random(-5,5),
        random(-5,5),
        randomRGB(),
        size, 
        );
        balls.push(ball);
}

function loop() {
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    ctx.fillRect(0,0,width,height);

    for(const ball of balls) {
        ball.draw();
        ball.update();
        ball.collisionDetect();
    }

    requestAnimationFrame(loop);
}

loop();
