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




function setup() {
  createCanvas(600, 400);
  textSize(32);
  textAlign(CENTER, CENTER);
}

function draw() {
    background(220);
    
    let h = hour();
    let m = minute();
    let s = second();
    let timeString = nf(h, 2) + ':' + nf(m, 2) + ':' + nf(s, 2);
    
    text(timeString, width / 2, height / 2);
}
