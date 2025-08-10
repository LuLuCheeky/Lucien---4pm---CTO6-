// write your codes here
let shapeColour = 'blue'

function setup() {
    createCanvas(600, 600);
    background(220);
}


function mouseDragged() {
    fill(shapeColour);
    circle(mouseX, mouseY, random(1, 100));
}
