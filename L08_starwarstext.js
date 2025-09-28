let storyText = [
    "A long time ago in a galaxy far,",
    "far away...",
    "",
    "EPISODE I",
    "THE BEGINNING",
    "",
    "It is a period of learning...",
    "Students have begun their journey",
    "into the world of p5.js.",
    "With newfound powers, they",
    "create amazing visuals and",
    "animations...",
    "",
    "May the Code be with you!"
];

let yPos;
function setup() {
    createCanvas(600, 400);
    yPos = height;
}

function draw() {
    background(0);
    textSize(20);
    textAlign(CENTER);
    fill("yellow")
    for (let i = 0; i < 14; i++) {
        text(storyText[i], width / 2, yPos + i * 30);
        yPos -= 0.1;
        if (yPos) {
            yPos = height;
        }
    }
}