let x;
let y;

function setup() {
    createCanvas(600, 400);
    background("lightblue");
    noStroke();
}

function draw() {
    background("lightblue");
    y = height / 2;
    x = width / 2;
    fill(220,0,0);
    x += 2;
    circle(x, y, 50);

    x = constrain(x, 25, width);
}