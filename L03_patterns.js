function setup() {
    createCanvas(600, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
  for (let i = 0; i < 5; i++) {
    fill(150 + i * 15, 150 + i * 15, 150 + i * 15);
    circle(75 + i * 75, 100, 40)
  }
}