function setup() {
    createCanvas(600, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
  for (let i = 0; i < 7; i++) {
    circle(100 + i * 100, 100, 40)
  }
}