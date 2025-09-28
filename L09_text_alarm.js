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
    if (mousePressed()) {
        interval = setInterval(countdown, 1000);
    }
    background(220);
    text(countdownNum, width / 2, height / 2 + 50); 
}

function countdown() {
    countdownNum--;
    if (countdownNum < 0) {
        clearInterval(interval);
        countdownNum = 0;
    }
}


