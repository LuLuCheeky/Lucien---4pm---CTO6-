let RectSize = 5;

function setup(){
    createCanvas(400, 400);
    background(220);
    noStroke();
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
    let centerX = width / 2;
    let centerY = height / 2;

    let topX = centerX - RectSize / 2;
    let topY = centerY - RectSize / 2;

    RectSize
}