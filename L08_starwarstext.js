let favouriteFood = ["poop", "snot", "boogers", "earwax", "toe jam"];
let yPos;
function setup() {
    createCanvas(600, 400);
    yPos = height;
}

function draw() {
    background(0);
    textSize(20);
    fill("yellow")
    for (let i = 0; i < 5; i++) {
        text(i + 1 + ". " + favouriteFood[i], width / 2, 60 + i * 30);
        yPos -= 1;
    }
}