function setup() {
    createCanvas(600, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
  for (let i = 0; i < 11; i++) {
    circle(50 + i * 50, 100, 40)
  }
}