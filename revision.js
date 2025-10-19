// let x = 300;
// let y;
// let speed = 2;

// function setup() {
//     createCanvas(600, 400);
//     background("lightblue");
//     noStroke();
// }

// function draw() {
//     background("lightblue");
//     y = height / 2;
//     fill(220,0,0);
//     x += speed;
//     circle(x, y, 50);
//     if (x > width - 27) {
//         speed = -2;
//     }
//     if (x < 27) {
//         speed = 2;
//     }
//     x = constrain(x, 25, width - 25);
// }

// let food = ["pizza", "burger", "fries", "salad"];

// function setup() {
//     createCanvas(400, 400);
//     background(220);
//     textSize(100);
//     textAlign(CENTER, CENTER);
// }

// function draw() {
//     for (let i = 0; i < food.length; i++) {
//         text(food[i], width / 2, 50 + i * 40);
//     }
// }

let colourPicker;
let textBox1;
let textBox2;
let text1;
let text2;

function setup() {
    createCanvas(400, 400);
    
    colourPicker = createColorPicker('yellow');
    colourPicker.position(width / 2 - 25, height / 2 + 350);

    textBox1 = createInput();
    textBox1.position(width / 2 - 125, height / 2 + 75);
    textBox1.input(display1);

    textBox2 = createInput();
    textBox2.position(width / 2 + 25, height / 2 + 75);
    textBox2.input(display2);

}

function draw() {
    background(colourPicker.value());
    
    textSize(15);
    text("Enter your name: ", width / 2 - 175, height / 2 + 100);

    rect(width / 2 - 125, height / 2 - 100,width / 2 + 50,height / 2 - 50,25 );
    text(userText, width / 2 , height / 2);


}

function userInputUp() {
    userText = this.text();
}
