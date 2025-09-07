function setup(){
    createCanvas(600, 400);
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

function draw(){
    background(220);


    if(key === "c"){
        circle(width / 2, height / 2, 50);
    }

    if(key === "t"){
        triangle(width / 2, height / 2 - 25, width / 2 - 50, height / 2);
    }

    if(key === "r"){
        rect(275, 175, 50, 50);
    }
}


