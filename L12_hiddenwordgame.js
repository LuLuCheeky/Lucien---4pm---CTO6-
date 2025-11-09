let attempts = 0;

function setup() {
    createCanvas(600,600);
}

function draw() {
    background(220);

    textAlign(CENTER, CENTER);
    text("Guess the Hidden Word!", width / 2, 50);
    text("Attempts:" + attempts, width / 2, 100);
    text("Hints:", width / 2, 50);
}