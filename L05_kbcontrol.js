let speed = 10;
let x = 300;
let y = 200;
function setup(){
    createCanvas(600, 400);
    background(220);
    noStroke();
}


function draw(){
    background(220);

    x = constrain(x, 25, width - 25);

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

