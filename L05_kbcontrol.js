let speed = 10;
let x = 300;
let y = 200;
let vx = 0;
let vy = 0;
function setup(){
    createCanvas(600, 400);
    background(220);
    noStroke();
}


function draw(){
    background(220);

    if(keyIsDown(68)){
        vx += speed;
    }
    if(keyIsDown(65)){
        vx -= speed;
    }
    if(keyIsDown(87)){
        vy -= speed;
    }
    if(keyIsDown(83)){
        vy += speed;
    }

    x += vx
    

    x = constrain(x, 25, width - 25);
    y = constrain(y, 25, height - 25);

    fill("yellow");
    circle(x, y, 50);
}

