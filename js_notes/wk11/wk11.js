console.log("test");
const x = 2;
const y = 2;

if(x == y) {
    console.log("SUCCESS");
}
else {
    console.log("FAIL");
}

const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // canvas is 2D for drawing on flat surface

document.addEventListener("DOMContentLoaded", () => { // changes size of canvas to fully fit on screen. changes width and height
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
  });

function random(number) {
    return Math.floor(Math.random() * number); // floor rounds DOWN our value
}

console.log(random(2));

function draw() {
   // console.log("it works");
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < 500; i++) { // makes 100 random circles
        ctx.beginPath(); // starts the drawing
        let red = random(255);
        let green = random(255);
        let blue = random(255);
        let color = "rgba(" + red + ", " + green + ", " + blue + "0.5)";
        ctx.fillStyle = color; // fills the circle with red
        ctx.arc( // draws circle
            random(canvas.width),
            random(canvas.height),
            random(100), // changes circle size
            0,
            0.5 * Math.PI,
        );
        ctx.fill(); // actually fills it
    }
}

btn.addEventListener("click", draw);