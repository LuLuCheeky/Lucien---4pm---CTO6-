let RectSize = 5;

function setup(){
    createCanvas(400, 400);
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
    background(220);
    let centerX = width / 2;
    let centerY = height / 2;

    let topX = centerX - RectSize / 2;
    let topY = centerY - RectSize / 2;

    rect(topX, topY, RectSize, RectSize);
}

function keyPressed() {
    RectSize = 100;
}

function keyReleased() {
    RectSize = 50;
}