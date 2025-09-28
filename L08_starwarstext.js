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
    textSize(24);
    textAlign(CENTER);
    fill("yellow")
    for (let i = 0; i < storyText.length; i++) {
        text(storyText[i], width / 2, yPos + i * 50);
    }
        yPos -= 1;
    if (yPos < - (storyText.length * 24 + (storyText.length - 1) * 50)) {
        yPos = height;

    }
}