// write your codes here
let shapeColour = 'blue'

function setup() {
    createCanvas(600, 600);
    background(220);
}

function draw() {
    fill(shapeColour);
    circle(mouseX, mouseY, 100);
}

function mousePressed() {
   shapeColour = color(random)
}

function mouseReleased() {
    shapeColour = color(random(255), random(255), random(255));
}