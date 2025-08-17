
let shapeColour ='white';
function setup(){
    createCanvas(400, 400);
    background(220);
    noStroke();
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
    circle(width / 2, height / 2, 100);
    fill(shapeColour);
}

function keyPressed() {
    console.log(key ,keyCode);
    if (keyCode === 81) {
        shapeColour = 'azure';
    }else if (keyCode === DOWN_ARROW) {
        shapeColour = 'lightgoldenrodyellow';
    }
    
}


