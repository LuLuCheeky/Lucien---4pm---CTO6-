// write your codes here
let shapeColour = 'blue'

function setup() {
    createCanvas(600, 600);
    background(220);
}


function mouseDragged() {
    mx = random(-10, 10)
    my = random(-10, 10)
    shapeColour = color(random(255), random(255), random(255));
    fill(shapeColour);
    circle(mouseX + mx, mouseY + my, random(10, 50));
}
