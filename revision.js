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

function setup() {
    createCanvas(400, 400);
    
    colourPicker = createColorPicker('yellow');
    colourPicker.position(width / 2, height);

}

function draw() {
    background(colourPicker.value());

    rect(50,50,50,50,50);


}
