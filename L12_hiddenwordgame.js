let attempts = 0;
let hiddenWord = "";
let textBox;
let button;
let disText = "";

function setup() {
    createCanvas(600,400);
    textBox = createInput();
    textBox.position(width / 2 - textBox.width / 2, 200);
    textBox.size(150, 30);
    textBox.style()

    button = createButton("Submit Guess");
    button.position(textBox.x + textBox.width + 30, 200);
    button.size(100, 30);
    button.mousePressed(display);
}

function draw() {
    background(220);

    textAlign(CENTER, CENTER);
    textSize(24);
    text("Guess the Hidden Word!", width / 2, 50);
    text("Attempts: " + attempts, width / 2, 100);
    text("Hints: " + hiddenWord, width / 2, 150);
    text(disText, width / 2, 250);
}

function display() {
    disText = textBox.value();
}