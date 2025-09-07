let speed = 5;
let x = width / 2;
let y = height / 2;

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

    circle(x, y, 50);
}

