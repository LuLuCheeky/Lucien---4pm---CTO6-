

function setup(){
    createCanvas(400, 400);
    background(220);
    noStroke();
}

// function mousePressed(){
//     shapeColour = color(random(255), random(255), random(255));
//     CircleSize += 5;
// }

// function mouseDragged(){
//     fill(shapeColour);
//     circle(mouseX, mouseY, CircleSize);
//     CircleSize += 0.5;
// }
function keyPressed() {
    let count = int(random(5, 21));
    for (let i = 0; i < count; i++) {
        let x = random(width);
        let y = random(height);
        let shapeColour = color(random(255), random(255), random(255));
        let size = random(10, 80);
        noStroke();
        circle(x, y, size)
        fill(shapeColour);
    }
}

function keyReleased() {
    background(220);
}

let a = 5;
let b = 5;
let c = 7;

console.log(a == b);
console.log(a === b);
alert("GAY ALERT")