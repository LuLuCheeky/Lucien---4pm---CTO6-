// write your codes here
let shapeColour = 'blue'

function setup() {
    createCanvas(600, 600);
    background(220);
}



function mousePressed() {
   shapeColour = color(random(255), random(255), random(255));
   fill(shapeColour);
}

function mouseReleased() {
    function mouseDragged() {
        circle(mouseX, mouseY, random(1, 100));
        shapeColour = color(random(255), random(255), random(255));
        fill(shapeColour);
    }
}

