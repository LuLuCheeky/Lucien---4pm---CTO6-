let xSpeed = 5;
let x = width / 2;
let y = height / 2;
let size = 50;
function setup(){
    createCanvas(600, 400);
}

function draw(){
    background(220);
    if (x <= 0 || x >= width - size){
        xSpeed*= -1;
        shapeColour = color(random(255), random(255), random(255));
    }

    x += xSpeed;

    noStroke();
    rect(x, y, size, size);
}