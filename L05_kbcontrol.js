

function setup(){
    createCanvas(400, 400);
    background(220);
    stroke(0);
    fill(255);
}

// function mousePressed(){
//     shapeColour = color(random(255), random(255), random(255));
//     CircleSize += 5;
// }

// function mouseDragged(){
//     fill(shapeColour);
//     circle(mouseX, mouseY, CircleSize);
//     CircleSize += 0.5;
// }
function draw() {
    if (showCircle) {
        fill(shapeColour);
        circle(mouseX, mouseY, CircleSize);
    }
}

function keyPressed() {
    if(key === 'c' || key === 'C') {
        showCircle = !showCircle;
    }
}

function keyReleased() {
    background(220);
}


