let userInput;
let userText

function setup() {
    createCanvas(600,600);
    background(220);
    userInput = createInput();
    userInput.position(width / 2 - input.width / 2, height - 50);
    userInput.input(userInputUp);

}

function draw() {       
    background(220);

    textAlign(CENTER, BOTTOM);
    textSize(32);
    fill(0);
    text("Type something :D", 50, height - 50);
}

function userInputUp() {
    userText = this.value();
}

