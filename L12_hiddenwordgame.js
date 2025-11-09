let attempts = 0;
let hiddenWord = "";
let textBox;
let button;
let disText = "";
let words = ["apple", "grape", "peach", "mango", "berry", "melon", "cherry", "guava"];
let hint = "";
let message = "";

function setup() {
    createCanvas(600,400);

    hiddenWord = random(words);
    hint = hiddenWord[0].toUpperCase() + " " + "_ ".repeat(hiddenWord.length - 1);

    textBox = createInput();
    textBox.position(width / 2 - textBox.width / 2, 200);
    textBox.size(150, 30);
    textBox.style('font-size', '16px');

    button = createButton("Submit Guess");
    button.position(textBox.x + textBox.width + 30, 200);
    button.size(100, 30);
    button.mousePressed(checkGuess);
}

function draw() {
    background(220);

    textAlign(CENTER, CENTER);
    textSize(24);
    text("Guess the Hidden Word!", width / 2, 50);
    text("Attempts: " + attempts, width / 2, 100);
    text("Hints: " + hint, width / 2, 150);
    text(disText, width / 2, 250);
}

function checkGuess() {
    attempts++;

    let guess = textBox.value();
    message = getCorrectLetters(guess, hiddenWord);

}

function getCorrectLetters(guess, hiddenWord) {
    let correctLetters = "";

    for(let i = 0; i < hiddenWord.length; i++) {
        if(hiddenWord.includes(guess[i]) && !correctLetters) {
            correctLetters += guess[i].toUpperCase();
        }
    }
    return correctLetters;
}