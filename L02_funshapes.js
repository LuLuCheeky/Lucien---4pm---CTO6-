function setup() {
  createCanvas(1536,728);
  background(255,255, 125);
}

function draw() {
triangle(100, 100, 200, 50, 300, 100);
quad(400, 100, 500, 50, 600, 100, 550, 200);
  ellipse(800, 100, 100, 100);
  rect(900, 50, 200, 200);
}