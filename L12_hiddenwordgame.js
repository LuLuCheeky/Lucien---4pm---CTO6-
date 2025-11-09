let attempts = 0;
let hiddenWord = "";
let textBox;
let button;

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