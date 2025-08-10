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
   shapeColour = 'red'
}

function mouseReleased() {
    shapeColour = color;
}