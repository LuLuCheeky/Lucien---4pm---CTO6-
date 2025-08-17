let showCircle = 

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
    background(220);
    if (showCircle) {
        circle(width / 2, height  / 2, 100);
    }
}

function keyPressed() {
    if(key === "c" || key === "C") {
        showCircle = !showCircle;
    }
}


