// write your codes here
let shapeColour = 'blue'

function setup() {
    createCanvas(600, 600);
    background(220);
}


function mouseDragged() {
    mx = ra
    shapeColour = color(random(255), random(255), random(255));
    fill(shapeColour);
    circle(mouseX, mouseY, random(1, 50));
}
