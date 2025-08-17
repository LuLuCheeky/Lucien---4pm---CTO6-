let showCircle = false;

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
    let colour = color(random(255), random(255), random(255));
    background(220);
    if (showCircle) {
        circle(width / 2, height  / 2, 200);
        fill(colour);
    }
}

function keyPressed() {
    console.log("key", key)
    console.log("keycode", keycode)
}


