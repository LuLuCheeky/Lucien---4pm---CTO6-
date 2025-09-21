let xSpeed = 5;
let x = width / 2;
let y = height / 2;
let size = 10
function setup(){
    createCanvas(600, 400);
    background(220);
}

function draw(){
    background(220);
    if (x <= 0 || x >= width - size / 2){
        xSpeed*= -1;
        shapeColour = color(random(255), random(255), random(255));
    }
    rect(x, y, 50, 50);
    x += xSpeed;
}