let x = 300;
let y;

function setup() {
    createCanvas(600, 400);
    background("lightblue");
    noStroke();
}

function draw() {
    background("lightblue");
    y = height / 2;
    fill(220,0,0);
    x += 2;
    circle(x, y, 50);
    if (x > width - 25) {
        x *= -1;
    }
    if (x < 25) {
        x *= -1;
    }
    x = constrain(x, 25, width - 25);
}