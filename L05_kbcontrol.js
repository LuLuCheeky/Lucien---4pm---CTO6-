let shapeColour = 'blue';
let CircleSize = 5;

function setup(){
    createCanvas(400, 400);
    background(220);
    noStroke();
}

function mousePressed(){
    shapeColour = color(random(255), random(255), random(255));
    CircleSize += 5;
}

function mouseDragged(){
    fill(shapeColour);
    circle(mouseX, mouseY, CircleSize);
    CircleSize += 0.5
;
}