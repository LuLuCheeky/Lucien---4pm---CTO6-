let xSpeed = 3;
let x = 300;
let y = 200;
let size = 40;
let starWarsText = "May the Force be with you";
let fontSize = 32;

function setup(){
    createCanvas(600, 400);
    textSize(fontSize);
    textAlign(CENTER, CENTER);
}

function draw(){
    background(220);
    if (x <= 0 || x >= width - textWidth(starWarsText)){
        xSpeed *= -1;
        shapeColour = color(random(255), random(255), random(255));
    }

    x += xSpeed;

    noStroke();
    fill(0);
    text(starWarsText, x + textWidth(starWarsText)/2, y + fontSize/2);
}