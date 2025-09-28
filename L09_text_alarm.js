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
        background(220);
        text(countdownNum, width / 2, height / 2 + 50); 
    }
}

function countdown() {
    countdownNum--;
    if (countdownNum < 0) {
        clearInterval(interval);
        countdownNum = 0;
    }
}


//
let countdown = 5; 
let interval; 

function setup() {
    createCanvas(600, 600); 
}

function draw() {
    background(220);

    textSize(100); 
    textAlign(CENTER);
    text(countdown, width/2, height/2); 

    textSize(34); 
    textAlign(CENTER);
    text("Click to Start Timer", width/2, height - 50); 

}

function mousePressed() {
        interval = setInterval(countdownUpdate, 1000); 
}

function countdownUpdate() {
    if(countdown>0) {
        countdown -=1; 
    } else {
        clearInterval(interval);
    }
}