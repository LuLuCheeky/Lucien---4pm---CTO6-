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
        triangle(200, 100, 300, 300, 100, 300);
    }

    if(key === "r"){
        rect(width / 2, height / 2, 50, 50);
    }
}


