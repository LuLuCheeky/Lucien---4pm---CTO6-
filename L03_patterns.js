function setup() {
    createCanvas(600, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
  for (let i = 0; i < 7; i++) {
    fill(150 + i * 50, 50, 150);
    circle(75 + i * 75, 100, 40)
  }
}