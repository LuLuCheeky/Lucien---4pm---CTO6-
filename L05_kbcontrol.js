
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
    }else if (keyCode === 87) {
        shapeColour = 'coral';
    }else if (keyCode === 69) {
        shapeColour = 'blueViolet';
    }else if (keyCode === 82) {
        shapeColour = 'cadetBlue';
    }else if (keyCode === 84) {
        shapeColour = 'cornflowerBlue';
    }else if (keyCode === 89) {
        shapeColour = 'darkGoldenRod';
    }else if (keyCode === 85) {
        shapeColour = "darkMagenta";
    }else if (keyCode === 73) {
        shapeColour = "darkSlateBlue";
    }else if (keyCode === 79) {
        shapeColour = "darkTurquoise";
    }else if (keyCode === 80) {
        shapeColour = "darkViolet";
    }else if (keyCode === 65) {
        shapeColour = "deepSkyBlue";
    }else if (keyCode === 83) {
        shapeColour = "dimGray";
    }else if (keyCode === 68) {
        shapeColour = "dodgerBlue";
    }else if (keyCode === 70) {
        shapeColour = "gold";
    }else if (keyCode === 71) {
        shapeColour = "goldenRod";
    }else if (keyCode === 72) {
        shapeColour = "indianRed";
    }else if (keyCode === 74) {
        shapeColour = "lavender";
    }else if (keyCode === 75) {
        shapeColour = "lightBlue";
    }else if (keyCode === 76) {
        shapeColour = "lightCoral";
    }else if (keyCode === 186) {
        shapeColour = "lightGoldenRodYellow";
        
    }
    
}


