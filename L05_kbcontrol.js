let speed = 5;
let x = 300;
let y = 200;

function setup(){
    createCanvas(600, 400);
    background(220);
    noStroke();
}


function draw(){
    console.log(keycode)
    background(220);

    if(keyIsDown("D")){
        x += speed;
    }
    if(keyIsDown("A")){
        x -= speed;
    }
    if(keyIsDown("W")){
        y -= speed;
    }
    if(keyIsDown("S")){
        y += speed;
    }
    fill("yellow");
    circle(x, y, 50);
}

