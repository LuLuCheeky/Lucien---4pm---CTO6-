// let speed = 2;
// let x = 300;

// function setup() {
//   createCanvas(600, 400);
//   textSize(24);
//   textAlign(CENTER, CENTER);
// }

// function draw() {
//     background(220);

//     if(x <= 0 || x >= width - 3.5 * 24) {
//         speed *= -1;
//     }

//     x -= speed;

//     text("Hi", x, height / 2);
// }


// function setup() {
//   createCanvas(600, 400);
//   textSize(50);
//   textAlign(CENTER, CENTER);
// }



let countdownNum = 5;
let interval;

function setup() {
    createCanvas(600, 400);
    textSize(30);
    textAlign(CENTER, CENTER);
}

function draw() {
    background(220);
    textSize(32);
    text("Click to Start Timer", width / 2, height - 50);
    textSize(100);
    text(countdownNum, width / 2, height / 2);
}

function mousePressed() {
    interval = setInterval(countdown, 1000);
}

function countdown() {
    if (countdownNum > 0) {
        countdownNum -= 1;
    } else {
        clearInterval(interval);
        

    }

}
//
