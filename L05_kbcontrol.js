let shapeColour = 'blue';

function setup(){
    createCanvas(1000, 1000);
    background(220);
    noStroke();
}

function mousePressed(){
    CircleSize = random(10, 1000000000000);
    shapeColour = color(random(255), random(255), random(255));
    fill(shapeColour);
    circle(mouseX, mouseY, CircleSize);
}

function mouseDragged(){
    let mx = random(-10, 10);
    let my = random(-10, 10);
    shapeColour = color(random(255), random(255), random(255));
    fill(shapeColour);
    circle(mouseX + mx, mouseY + my, CircleSize);
}