// write your codes here
let shapeColour = 'blue'

function setup() {
    createCanvas(600, 600);
    background(220);
}

function draw() {
    fill(shapeColour);
}

function mousePressed() {
   shapeColour = 'white';
}

function mouseReleased() {
    shapeColour = color(random(255), random(255), random(255));
}

function mouseDragged() {
    circle(mouseX, mouseY, 100);
}