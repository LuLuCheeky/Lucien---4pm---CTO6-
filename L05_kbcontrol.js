let speed = 20;
let x = 300;
let y = 200;
let constainX = constrain(x, 25, width - 25)
let constrainY = constrain(y, 25, height - 25)
function setup(){
    createCanvas(600, 400);
    background(220);
    noStroke();
}


function draw(){
    background(220);

    if(keyIsDown(68)){
        x += speed;
    }
    if(keyIsDown(65)){
        x -= speed;
    }
    if(keyIsDown(87)){
        y -= speed;
    }
    if(keyIsDown(83)){
        y += speed;
    }
    fill("yellow");
    circle(x, y, 50);
}

function keyPressed(){
    console.log(keyCode);
}