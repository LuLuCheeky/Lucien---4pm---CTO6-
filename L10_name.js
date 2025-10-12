let input;
let text = "TEXT WOW 😲😲"

function setup() {
    createCanvas(600,600);

    input = createInput();
    input.position(width / 2 - input.width / 2, height - 50);
    userInputUp.input

}

function draw() {       
    background(220);

    textAlign(CENTER, BOTTOM);
    textSize(32);
    fill(0);
    text("Type something :D", 50, height - 50);
}

function userInputUp() {
    user.text = this.value();
}