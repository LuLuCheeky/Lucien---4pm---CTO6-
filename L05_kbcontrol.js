let speed = 5;
let x = 300;
let y = 200;

function setup(){
    createCanvas(600, 400);
    background(220);
    noStroke();
}


function draw(){
    background(220);

    if(keyIsDown("D")){
        x += speed;
    }
    fill("yellow");
    circle(x, y, 50);
}

